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

import { ChannelCredentials } from "@grpc/grpc-js";
import { AccountServiceClient } from "@scow/scheduler-adapter-protos/build/protos/account";
import { AppServiceClient } from "@scow/scheduler-adapter-protos/build/protos/app";
import { ConfigServiceClient } from "@scow/scheduler-adapter-protos/build/protos/config";
import { JobServiceClient } from "@scow/scheduler-adapter-protos/build/protos/job";
import { UserServiceClient } from "@scow/scheduler-adapter-protos/build/protos/user";
import { VersionServiceClient } from "@scow/scheduler-adapter-protos/build/protos/version";

import { SslConfig } from "./ssl";

type ClientConstructor<TClient> =
  new (address: string, credentials: ChannelCredentials) => TClient;

export interface SchedulerAdapterClient {
  account: AccountServiceClient;
  user: UserServiceClient;
  job: JobServiceClient;
  config: ConfigServiceClient;
  version: VersionServiceClient;
  app: AppServiceClient;
}

export function getClient<TClient>(
  address: string, sslConfig: SslConfig, ctor: ClientConstructor<TClient>,
): TClient {
  if (sslConfig.enabled) {
    return new ctor(
      address,
      ChannelCredentials.createSsl(sslConfig.ca, sslConfig.key, sslConfig.cert),
    );
  }

  return new ctor(
    address,
    ChannelCredentials.createInsecure(),
  );
}

export const getSchedulerAdapterClient = (address: string, sslConfig: SslConfig) => {
  return {
    account: getClient(address, sslConfig, AccountServiceClient),
    user: getClient(address, sslConfig, UserServiceClient),
    job: getClient(address, sslConfig, JobServiceClient),
    config: getClient(address, sslConfig, ConfigServiceClient),
    version: getClient(address, sslConfig, VersionServiceClient),
    app: getClient(address, sslConfig, AppServiceClient),
  } as SchedulerAdapterClient;
};
