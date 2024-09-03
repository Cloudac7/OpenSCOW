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

/**
 * 用户订阅规则
 * 1. 不可以修改 eventType 为 ANNOUNCEMENT 的 noticeType
 * 2. 租户未开启的订阅，用户不可开启
 * 3. 租户开启的订阅，但是设置用户不可更改的，用户不能修改
 */

import { Code, ConnectError, type ConnectRouter } from "@connectrpc/connect";
import { ApiKeyService } from "@scow/notification-protos/build/api_key_connect";
import { PlatformRole } from "src/models/user";
import { ApiKey } from "src/server/db/entities/ApiKey";
import { checkAuth } from "src/utils/auth/check-auth";
import { forkEntityManager } from "src/utils/get-orm";
import { v4 as UUID } from "uuid";
import { z } from "zod";

export const ApiKeySchema = z.object({
  id: z.number(),
  appId: z.string(),
  name: z.string(),
  key: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export default (router: ConnectRouter) => {
  router.service(ApiKeyService, {
    async listApiKeys(req, context) {

      const user = await checkAuth(context);

      if (!user.platformRoles.includes(PlatformRole.PLATFORM_ADMIN)) {
        throw new ConnectError(`User ${user.identityId} can't get api keys`, Code.PermissionDenied);
      }

      const em = await forkEntityManager();

      const [apiKeys, totalCount] = await em.findAndCount(ApiKey, { appId: req.appId });

      return {
        totalCount,
        apiKeys: apiKeys.map((apiKey) => ({
          ...apiKey,
          id: BigInt(apiKey.id),
          createdAt: apiKey.createdAt.toISOString(),
          updatedAt: apiKey.updatedAt.toISOString(),
        })),
      };
    },

    async createApiKey(req, context) {
      const { appId, name } = req;

      const user = await checkAuth(context);

      if (!user?.platformRoles.includes(PlatformRole.PLATFORM_ADMIN)) {
        throw new ConnectError(`User ${user?.identityId} can't get api keys`, Code.PermissionDenied);
      }

      const em = await forkEntityManager();

      const apiKey = await em.findOne(ApiKey, { appId, name });
      if (apiKey) {
        throw new ConnectError(`api key ${appId}-${name} already exists`, Code.AlreadyExists);
      }

      const newApiKey = new ApiKey({
        appId,
        name,
        key: UUID(),
      });

      await em.persistAndFlush(newApiKey);

      return {
        ...newApiKey,
        createdAt: newApiKey.createdAt.toISOString(),
        updatedAt: newApiKey.updatedAt.toISOString(),
      };
    },
  });
};
