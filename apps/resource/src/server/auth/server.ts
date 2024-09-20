import { IncomingMessage } from "http";
import { NextApiRequest, NextApiResponse, NextPageContext } from "next";
import { NextRequest } from "next/server";
import { PlatformRole,TenantRole } from "src/models/user";
import { deleteUserToken, getUserToken } from "src/server/auth/cookie";
import { validateToken as authValidateToken } from "src/utils/auth";
import { SimpleUserInfo } from "src/utils/auth/validate-token";
import { AUTH_INTERNAL_URL, USE_MOCK } from "src/utils/processEnv";

import { ClientUserInfo } from "../trpc/route/auth";
import { validateToken } from "./token";

export const MOCK_USER_INFO: ClientUserInfo = {
  tenant: "default",
  name: "demo_admin",
  identityId: "demo_admin",
  token: "demo_admin",
  tenantRoles: [TenantRole.TENANT_ADMIN],
  platformRoles: [PlatformRole.PLATFORM_ADMIN],
};

type RequestType = IncomingMessage | NextApiRequest | NextRequest | NextPageContext["req"];

export async function getUserInfo(req: RequestType, res?: NextApiResponse): Promise<ClientUserInfo | undefined> {

  if (USE_MOCK) {
    return MOCK_USER_INFO;
  }

  const token = getUserToken(req);
  if (!token) { return undefined; }

  const result = await validateToken(token);


  if (!result?.identityId) {
    deleteUserToken(res);
    return;
  }

  return { ...result, token };

}

export const authenticate = () =>
  async (req: NextApiRequest): Promise<undefined | SimpleUserInfo> => {

    const token = getUserToken(req);
    if (!token) { return undefined; }

    const resp = await authValidateToken(AUTH_INTERNAL_URL, token).catch(() => undefined);

    if (!resp) {
      return undefined;
    }

    return resp;

  };
