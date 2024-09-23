"use client";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Cluster } from "@scow/config/build/type";
import { getCurrentLangTextArgs,getI18nConfigCurrentText } from "@scow/lib-web/build/utils/systemLanguage";
import { App, Button, Space, Table } from "antd";
import React, { useMemo, useState } from "react";
import { I18nDicType } from "src/models/i18n";
import { trpc } from "src/server/trpc/api";
import { DEFAULT_PAGE_SIZE } from "src/utils/constants";

interface AccountDefaultClustersProps {
  assignedClusterIds: string[] | undefined;
  currentClusters: Cluster[],
  tenantName: string;
  isLoading: boolean;
  reload: () => void;
  language: I18nDicType;
  languageId?: string;
}

export const AccountDefaultClustersTable: React.FC<AccountDefaultClustersProps> = ({
  assignedClusterIds, currentClusters, tenantName, isLoading, reload, language, languageId,
}) => {

  const { message, modal } = App.useApp();

  const [currentPageNum, setCurrentPageNum] = useState<number>(1);

  const displayedData = useMemo(() => assignedClusterIds 
    ? assignedClusterIds
      .map((id) => {
        const name = currentClusters.find((cluster) => cluster.id === id)?.name;
        return name ? { id, name } : null;
      })
      .filter((item) => item !== null)
    : undefined, 
  [assignedClusterIds, currentClusters]);

  const removeFromDefaultClustersMutation = trpc.partitions.removeFromAccountDefaultClusters.useMutation({
    onSuccess() {
      message.success(language.accountDefaultClusters.removeModal.removedSuccessMessage);
      reload();
    },
    onError(e) {
      if (e.data?.code === "FORBIDDEN") {
        message.error(language.globalMessage.authFailureMessage);
        return;
      } else if (e.data?.code === "CONFLICT") {
        message.error(e.message);
        return;
      } else {
        message.error(e.message);
      }
    },
  });


  const removerFromDefaultClusters = async (
    clusterId: string,
  ) => {
    await removeFromDefaultClustersMutation.mutateAsync({
      clusterId,
      tenantName,
    });
  };

  return (
    <div>
      <Space style={{ marginBottom: "20px" }}>
        <ExclamationCircleOutlined />
        <span>
          {language.accountDefaultClusters.explanation}
        </span>
      </Space>
      <Table
        tableLayout="fixed"
        dataSource={displayedData as Cluster[]}
        loading={isLoading}
        pagination={{
          showSizeChanger: true,
          defaultPageSize: DEFAULT_PAGE_SIZE,
          current: currentPageNum,
          onChange: (page) => setCurrentPageNum(page),
        }}
      >
        <Table.Column<Cluster>
          dataIndex="cluster"
          title={language.common.cluster}
          render={(_, r) => {
            const clusterName = getI18nConfigCurrentText(r.name, languageId);
            return clusterName;
          }}
          sorter={(a, b) => a.id.localeCompare(b.id)}
        />
        <Table.Column<Cluster>
          title={language.common.operation}
          render={(_, r) => (
            <Space>
              <Button
                type="link"
                onClick={() => {
                  const clusterName = getI18nConfigCurrentText(r.name, languageId);
                  modal.confirm({
                    title: language.accountDefaultClusters.removeModal.title,
                    icon: <ExclamationCircleOutlined />,
                    content: getCurrentLangTextArgs(language.accountDefaultClusters.removeModal.content,
                      [tenantName, clusterName]),
                    onOk: async () => {
                      // 移出默认集群
                      await removerFromDefaultClusters(r.id);
                    },
                  });
                }}
              >
                {language.accountDefaultClusters.removeModal.title}
              </Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};
