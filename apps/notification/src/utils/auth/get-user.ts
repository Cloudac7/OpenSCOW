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

import { asyncClientCall } from "@ddadaal/tsgrpc-client";
import { GetUserInfoResponse, UserServiceClient } from "@scow/protos/build/server/user";
import { Logger } from "pino";
import { UserInfo } from "src/models/user";

import { getScowClient } from "../scow-client";

export interface AuthUserInfo {
  identityId: string;
  name?: string;
  mail?: string;
}

/**
 * Get user info
 * @param userId the identity id of the user
 * @returns the user info. undefined if user do not exist
 */
export async function getUser(
  userId: string,
  logger: Logger,
): Promise<UserInfo | undefined> {

  const client = getScowClient(UserServiceClient);

  try {
    const userInfo: GetUserInfoResponse = await asyncClientCall(client, "getUserInfo", { userId });

    return {
      accountAffiliations: userInfo.affiliations,
      identityId: userId,
      name: userInfo.name,
      platformRoles: userInfo.platformRoles,
      tenant: userInfo.tenantName,
      tenantRoles: userInfo.tenantRoles,
      email:userInfo.email,
      createTime:userInfo.createTime,
    };
  } catch {
    logger.error(`get user ${userId}'s info error`);
    return undefined;
  }
}

export async function fetchAllUsers(userIds: string[], logger: Logger) {
  try {
    const userPromises = userIds.map(async (id) => {
      try {
        const user = await getUser(id, logger);
        return user;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        logger.error(`Failed to get user with id ${id}: ${errorMessage}`);

        return undefined;
      }
    });

    // 等待所有异步操作完成
    const users = await Promise.all(userPromises);
    return users;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    // 捕获并记录任何其他可能的错误
    logger.error(`Unexpected error: ${errorMessage}`);
    throw error;
  }
}
