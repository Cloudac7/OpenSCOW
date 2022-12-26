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

import { formatDateTime } from "@scow/lib-web/build/utils/datetime";
import { Badge, Descriptions, Space, Spin } from "antd";
import { NextPage } from "next";
import { useState } from "react";
import { useAsync } from "react-async";
import { api } from "src/apis";
import { requireAuth } from "src/auth/requireAuth";
import { DisabledA } from "src/components/DisabledA";
import { PageTitle } from "src/components/PageTitle";
import { useMessage } from "src/layouts/prompts";
import { PlatformRole } from "src/models/User";
import { Head } from "src/utils/head";



const promiseFn = async () => api.getFetchJobInfo({});

export const FetchJobsInfoPage: NextPage = requireAuth((u) => u.platformRoles.includes(PlatformRole.PLATFORM_ADMIN))(
  () => {
    const { isLoading, data, reload } = useAsync({
      promiseFn,
    });

    const message = useMessage();

    const [fetching, setFetching] = useState(false);
    const [changingState, setChangingState] = useState(false);

    return (
      <div>
        <Head title="获取作业信息" />
        <PageTitle titleText={"获取作业信息"} isLoading={isLoading} reload={reload} />
        <Spin spinning={isLoading}>
          {
            data ? (
              <Descriptions bordered column={1}>
                <Descriptions.Item label="周期性获取作业状态">
                  <Space>
                    {data.fetchStarted
                      ? <Badge status="success" text="已开启" />
                      : <Badge status="error" text="已暂停" />
                    }
                    <DisabledA
                      onClick={() => {
                        setChangingState(true);
                        api.setFetchState({ query: { started: !data.fetchStarted } })
                          .then(() => reload())
                          .finally(() => setChangingState(false));
                      }}
                      disabled={changingState}
                    >
                      {data.fetchStarted ? "停止获取" : "开始获取"}
                    </DisabledA>
                  </Space>
                </Descriptions.Item>
                <Descriptions.Item label="作业获取周期">
                  {data.schedule}
                </Descriptions.Item>
                <Descriptions.Item label="上次获取时间">
                  <Space>
                    <span>
                      {data.lastFetchTime ? formatDateTime(data.lastFetchTime) : "未获取过"}
                    </span>
                    <DisabledA
                      onClick={() => {
                        setFetching(true);
                        api.fetchJobs({})
                          .then(({ newJobsCount }) => {
                            message.success(`作业获取完成，获取到${newJobsCount}条新纪录。`);
                            reload();
                          })
                          .finally(() => setFetching(false));
                      }}
                      disabled={fetching}
                    >
                    立刻获取作业
                    </DisabledA>
                  </Space>
                </Descriptions.Item>
              </Descriptions>
            ) : undefined
          }
        </Spin>
      </div>
    );
  });

export default FetchJobsInfoPage;

