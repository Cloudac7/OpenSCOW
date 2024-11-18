/**
 * Copyright (c) 2022 Peking University and Peking University Institute for Computing and Digital Economy
 * SCOW is licensed under Mulan PSL v2.
 * You can use this software according to the terms and conditions of the Mulan PSL v2.
 * You may obtain a copy of Mulan PSL v2 at:
 *          http://license.coscl.org.cn/MulanPSL2
 * THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND,
 * EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT,
 * MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
 * See the Mulan PSL v2 for more details.
 */

import { typeboxRouteSchema } from "@ddadaal/next-typed-api-routes-runtime";
import { getNotificationNodeClient } from "@scow/lib-notification/build/index";
import { NoticeType, ReadStatus } from "@scow/notification-protos/build/message_common_pb";
import { Static, Type } from "@sinclair/typebox";
import { authenticate } from "src/auth/server";
import { publicConfig } from "src/utils/config";
import { route } from "src/utils/route";

export const MetadataMap = Type.Record(
  Type.String(),
  Type.Union([
    Type.String(),
    Type.Number(),
    Type.Boolean(),
    Type.Null(),
  ]),
);
export type MetadataMapType = Static<typeof MetadataMap>;

export const Template = Type.Object({
  default: Type.String(),
  en: Type.String(),
  zhCn: Type.String(),
});

export const Message = Type.Object({
  id: Type.Number(),
  messageType: Type.Optional(Type.Object({
    type: Type.String(),
    titleTemplate: Type.Optional(Template),
    contentTemplate: Type.Optional(Template),
    category: Type.String(),
    categoryTemplate: Type.Optional(Template),
  })),
  metadata: Type.Optional(Type.Record(Type.String(), Type.Any())),
  createdAt: Type.String(),
  updatedAt: Type.String(),
});
export type Message = Static<typeof Message>;


export const UnreadMessage = Type.Object({
  totalCount: Type.Number(),
  messages: Type.Array(Message),
});
export type UnreadMessage = Static<typeof UnreadMessage>;

export const GetUnreadMessageSchema = typeboxRouteSchema({

  method: "GET",

  query: Type.Object({
    messageType: Type.Optional(Type.String()),
    page: Type.Optional(Type.Number()),
    pageSize: Type.Optional(Type.Number()),
  }),

  responses: {
    200: Type.Object({
      results: UnreadMessage,
    }),

    500: Type.Object({ code: Type.Literal("INTERNAL_ERROR") }),

  },
});

const auth = authenticate(() => true);

export default route(GetUnreadMessageSchema, async (req, res) => {

  const info = await auth(req, res);

  if (!info) { return; }

  const notifClient = publicConfig.NOTIF_ENABLED && publicConfig.NOTIF_ADDRESS
    ? getNotificationNodeClient(publicConfig.NOTIF_ADDRESS) : undefined;

  if (!notifClient) {
    return;
  }

  const { messageType, page, pageSize } = req.query;

  return notifClient.scowMessage.listMessages({
    messageType, page, pageSize,
    userId: info.identityId, readStatus: ReadStatus.UNREAD, noticeType: NoticeType.SITE_MESSAGE,
  })
    .then((res) => {
      return { 200: { results: {
        totalCount: Number(res.totalCount),
        messages: res.messages.map((msg) => ({ ...msg, id: Number(msg.id) })),
      } } };
    }).catch(() => {
      return { 500: { code: "INTERNAL_ERROR" as const } };
    });
});
