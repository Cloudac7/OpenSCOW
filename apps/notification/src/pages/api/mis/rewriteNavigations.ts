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

import { NextApiRequest, NextApiResponse } from "next";
import { PlatformRole } from "src/models/user";
import { validateToken } from "src/server/auth/token";

import { applyMiddleware } from "../middleware/cors";

interface NavItem {
  path: string;
  text: string;
  clickToPath?: string | undefined;
  clickable?: boolean | undefined;
  icon?: {
    src: string;
    alt?: string
  },
  openInNewPage?: boolean | undefined;
  children?: NavItem[] | undefined;
  hideIfNotActive?: boolean | undefined;
};

interface Request {
  navs: NavItem[];
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body as Request;

  const searchParams = req.query;
  const scowLangId = searchParams.scowLangId;

  const isChinese = scowLangId === "zh_cn";

  const cookie = req.headers.cookie;
  // 将 cookie 字符串解析为对象
  const cookies = cookie?.split(";").reduce<Record<string, string>>((acc, cookie) => {
    const [key, value] = cookie.trim().split("=");
    if (key && value) {
      acc[key] = value;
    }
    return acc;
  }, {});

  // 获取名为 'SCOW_USER' 的 cookie
  // eslint-disable-next-line @typescript-eslint/dot-notation
  const scowUserCookie = cookies?.["SCOW_USER"];

  const userInfo = await validateToken(scowUserCookie);

  body.navs.push({
    path: "/",
    clickToPath: "/notification",
    text: isChinese ? "通知" : "Notification",
    hideIfNotActive: true,
    children: [
      {
        path: "/notification",
        clickToPath: undefined,
        text: isChinese ? "消息通知" : "Message Notification",
        icon: { src: "/notif/icons/notif.svg" },
      },
      {
        path: "/subscription",
        clickToPath: undefined,
        text: isChinese ? "消息订阅" : "Message Subscription",
        icon: { src: "/notif/icons/subscription.svg" },
      },
      ...cookie && userInfo?.platformRoles.includes(PlatformRole.PLATFORM_ADMIN) ? [
        {
          path: "/message-config",
          clickToPath: undefined,
          text: isChinese ? "消息设置" : "Message Setting",
          icon: { src: "/notif/icons/msg-config.svg" },
        },
        {
          path: "/send-message",
          clickToPath: undefined,
          text: isChinese ? "发送消息" : "Send Message",
          icon: { src: "/notif/icons/send-msg.svg" },
        },
        {
          path: "/create-custom-message-type",
          clickToPath: undefined,
          text: isChinese ? "创建自定义消息类型" : "Create Custom Message Type",
          icon: { src: "/notif/icons/create-custom-type.svg" },
        },
      ] : [],
    ],
  });

  return res.status(200).json({ navs: body.navs });
}

export default applyMiddleware(handler);
