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

import { typeboxRoute, typeboxRouteSchema } from "@ddadaal/next-typed-api-routes-runtime";
import { asyncClientCall } from "@ddadaal/tsgrpc-client";
import { JobServiceClient } from "@scow/protos/build/server/job";
import { Static, Type } from "@sinclair/typebox";
import { authenticate } from "src/auth/server";
import { PlatformRole } from "src/models/User";
import { getClient } from "src/utils/client";

export const GetJobTotalCountResponse = Type.Object({
  count: Type.Number(),
  refreshTime: Type.String({ format: "date-time" }),
});

export type GetJobTotalCountResponse = Static<typeof GetJobTotalCountResponse>;


export const GetJobTotalCountSchema = typeboxRouteSchema({
  method: "GET",

  responses: {
    200: GetJobTotalCountResponse,
  },
});

const auth = authenticate((info) => info.platformRoles.includes(PlatformRole.PLATFORM_ADMIN));

export default typeboxRoute(GetJobTotalCountSchema,
  async (req, res) => {

    const info = await auth(req, res);
    if (!info) {
      return;
    }
    const client = getClient(JobServiceClient);

    const result = await asyncClientCall(client, "getJobTotalCount", {});

    return {
      200: {
        ...result,
        refreshTime: result.refreshTime!,
      },
    };
  });
