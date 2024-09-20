"use client";

import { Cluster } from "@scow/config/build/type";
import { Button, Divider, Form, Input, message, Space, Table } from "antd";
import React, { useMemo, useState } from "react";
import { I18nDicType } from "src/models/i18n";
import { ClusterPartition, PartitionOperationType } from "src/models/partition";
import { trpc } from "src/server/trpc/api";
import { AllAssignedInfoSchema } from "src/server/trpc/route/partitions/tenantClusterPartitions";
import { DEFAULT_PAGE_SIZE } from "src/utils/constants";

import { FilterFormContainer } from "../FilterFormContainer";
import { AssignedDetailsDrawer } from "./AssinedDetailsDrawer";
import { ClusterAssignmentLink } from "./ClusterAssignmentModal";
import { PartitionAssignmentLink } from "./PartitionAssignmentModal";


interface Props {
  operationType: PartitionOperationType;
  tenantName?: string;
  language: I18nDicType;
  languageId: string;
}

interface FilterForm {
  name: string | undefined;
}

export const PartitionManagementTable: React.FC<Props> = ({
  operationType, tenantName, language, languageId }) => {

  const { data: currentClustersData,
    refetch: currentClustersRefetch,
    isFetching: currentClustersIsFetching,
    error: currentClustersError,
  } = trpc.misServer.currentClusters.useQuery();

  const { data: currentClustersPartitionsData, 
    refetch: currentClustersPartitionsRefetch, 
    isFetching: currentClustersPartitionsIsFetching, 
    error: currentClustersPartitionsError } =
    trpc.misServer.currentClustersPartitionsInfo.useQuery();

  if (currentClustersError) {
    message.error(language.globalMessage.currentClustersNotFoundError);
  }
  if (currentClustersPartitionsError) {
    message.error(language.globalMessage.currentClusterPartitionsNotFoundError);
  }

  // 仅在账户授权时启用
  const { data: accountsData, refetch: accountsRefetch, isFetching: accountIsFetching } =
      trpc.partitions.allAccountsAssignedClustersPartitions.useQuery({ tenantName: tenantName ?? "" }, {
        enabled: operationType === PartitionOperationType.ACCOUNT_OPERATION,
      });

  // 仅在账户授权时启用
  const { data: tenantAssignedClustersData,
    refetch: tenantAssignedClustersRefetch,
    isFetching: tenantAssignedClustersIsFetching,
    error: tenantAssignedClustersError,
  } = trpc.partitions.tenantAssignedClusters.useQuery({ tenantName: tenantName ?? "" }, {
    enabled: operationType === PartitionOperationType.ACCOUNT_OPERATION,
  });

  // 仅在账户授权时启用
  const { data: tenantAssignedPartitionsData,
    refetch: tenantAssignedPartitionsRefetch,
    isFetching: tenantAssignedPartitionsIsFetching,
    error: tenantAssignedPartitionsError,
  } = trpc.partitions.tenantAssignedPartitions.useQuery({ tenantName: tenantName ?? "" }, {
    enabled: operationType === PartitionOperationType.ACCOUNT_OPERATION,
  });

  if (tenantAssignedClustersError) {
    message.error(language.globalMessage.tenantAssignedClustersNotFound);
  }
  if (tenantAssignedPartitionsError) {
    message.error(language.globalMessage.assignedPartitionsNotFoundMessage);
  }

  // 仅在租户授权时启用
  const { data: tenantsData, refetch: tenantsRefetch, isFetching: tenantsIsFetching } =
      trpc.partitions.allTenantAssignedClustersPartitions.useQuery(undefined,
        {
          enabled: operationType === PartitionOperationType.TENANT_OPERATION,
        },
      );

  const handleReload = () => {
    if (operationType === PartitionOperationType.ACCOUNT_OPERATION) {
      accountsRefetch();
      tenantAssignedClustersRefetch();
      tenantAssignedPartitionsRefetch();
      currentClustersRefetch();
      currentClustersPartitionsRefetch();
    } else {
      tenantsRefetch();
    }
  };

  return (
    <div>
      <ClusterPartitionInfoTable
        data={operationType === PartitionOperationType.TENANT_OPERATION ? tenantsData : accountsData }
        isLoading={
          operationType === PartitionOperationType.TENANT_OPERATION ?
            tenantsIsFetching :
            accountIsFetching && tenantAssignedClustersIsFetching && tenantAssignedPartitionsIsFetching }
        reload={() => handleReload()}
        operationType={operationType}
        languageId={languageId}
        language={language}
        tenantAssignedClusters={tenantAssignedClustersData?.assignedClusters}
        tenantAssignedPartitions={tenantAssignedPartitionsData?.assignedPartitions}
        currentClustersFetching={currentClustersIsFetching}
        currentClustersData={currentClustersData?.results}
        currentClustersPartitionsFetching={currentClustersPartitionsIsFetching}
        currentClustersPartitionsData={currentClustersPartitionsData}
      />
    </div>
  );
};

interface ClusterPartitionManagementInfoTableProps {
  data: AllAssignedInfoSchema[] | undefined;
  isLoading: boolean;
  reload: () => void;
  operationType: PartitionOperationType;
  languageId: string;
  language: I18nDicType;
  tenantAssignedClusters?: string[];
  tenantAssignedPartitions?: ClusterPartition[];
  currentClustersData?: Cluster[];
  currentClustersPartitionsData?: ClusterPartition[];
  currentClustersFetching: boolean;
  currentClustersPartitionsFetching: boolean;
}

const ClusterPartitionInfoTable: React.FC<ClusterPartitionManagementInfoTableProps> = ({
  data, 
  isLoading, 
  reload,
  operationType,
  languageId,
  language, 
  tenantAssignedClusters, 
  tenantAssignedPartitions,
  currentClustersData,
  currentClustersPartitionsData,
  currentClustersFetching,
  currentClustersPartitionsFetching,
}) => {

  const [form] = Form.useForm<FilterForm>();

  const [currentPageNum, setCurrentPageNum] = useState<number>(1);
  const [previewItem, setPreviewItem] = useState<AllAssignedInfoSchema | undefined>(undefined);


  const [query, setQuery] = useState<FilterForm>({
    name: undefined,
  });

  const filteredData = useMemo(() => data ? data.filter((x) => {

    if (operationType === PartitionOperationType.TENANT_OPERATION) {
      return !query.name || x.tenantName.includes(query.name);
    } else {
      return !query.name || x.accountName?.includes(query.name);
    }

  }) : undefined, [data, query, operationType]);

  return (
    <div>
      <FilterFormContainer style={{ display: "flex", justifyContent: "space-between" }}>
        <Form<FilterForm>
          layout="inline"
          form={form}
          initialValues={query}
          onFinish={async () => {
            setQuery(await form.validateFields());
            setCurrentPageNum(1);
          }}
        >
          <Form.Item
            label={operationType === PartitionOperationType.TENANT_OPERATION ?
              language.common.tenant : language.common.account}
            name="name"
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">{language.common.search}</Button>
          </Form.Item>
        </Form>
      </FilterFormContainer>

      <Table
        tableLayout="fixed"
        dataSource={filteredData}
        loading={isLoading}
        pagination={{
          showSizeChanger: true,
          defaultPageSize: DEFAULT_PAGE_SIZE,
          current: currentPageNum,
          onChange: (page) => setCurrentPageNum(page),
        }}
      >
        {
          operationType === PartitionOperationType.TENANT_OPERATION && (
            <Table.Column<AllAssignedInfoSchema>
              dataIndex="tenantName"
              title={language.common.tenant}
              sorter={(a, b) => (a.tenantName ?? "").localeCompare(b.tenantName ?? "")}
            />
          )
        }
        {
          operationType === PartitionOperationType.ACCOUNT_OPERATION && (
            <Table.Column<AllAssignedInfoSchema>
              dataIndex="accountName"
              title={language.common.account}
              sorter={(a, b) => (a.accountName ?? "").localeCompare(b.accountName ?? "")}
            />
          )
        }
        <Table.Column<AllAssignedInfoSchema>
          dataIndex="assignedClustersCount"
          title={language.clusterPartitionManagement.common.assignedClustersCount}
          width="20%"
          render={(_, r) => r.assignedInfo.assignedClustersCount}
          sorter={(a, b) => a.assignedInfo.assignedClustersCount - b.assignedInfo.assignedClustersCount}
        />
        <Table.Column<AllAssignedInfoSchema>
          dataIndex="assignedPartitionsCount"
          title={language.clusterPartitionManagement.common.assignedPartitionsCount}
          width="20%"
          render={(_, r) => r.assignedInfo.assignedPartitionsCount}
          sorter={(a, b) => a.assignedInfo.assignedPartitionsCount - b.assignedInfo.assignedPartitionsCount}
        />
        <Table.Column<AllAssignedInfoSchema>
          title={language.common.operation}
          width="30%"
          fixed="right"
          render={(_, r) => (
            <Space>
              <>
                <ClusterAssignmentLink
                  assignedAccountName={r.accountName}
                  assignedTenantName={r.tenantName}
                  assignedClusters={r.assignedInfo.assignedClusters}
                  operationType={operationType}
                  reload={reload}
                  isCurrentClustersLoading={currentClustersFetching}
                  languageId={languageId}
                  language={language}
                  tenantAssignedClusters={tenantAssignedClusters}
                  currentClustersData={currentClustersData}
                >
                  {language.clusterPartitionManagement.common.assignCluster}
                </ClusterAssignmentLink>
                <Divider type="vertical" />
                <PartitionAssignmentLink
                  assignedAccountName={r.accountName}
                  assignedTenantName={r.tenantName}
                  assignedInfo={r.assignedInfo}
                  operationType={operationType}
                  reload={reload}
                  languageId={languageId}
                  language={language}
                  tenantAssignedPartitions={tenantAssignedPartitions}
                  currentClustersData={currentClustersData}
                  currentClustersDataFetching={currentClustersFetching}
                  currentClustersPartitionsData={currentClustersPartitionsData}
                  currentClustersPartitionsFetching={currentClustersPartitionsFetching}
                >
                  {language.clusterPartitionManagement.common.assignPartition}
                </PartitionAssignmentLink>
                <Divider type="vertical" />
                <a onClick={() => setPreviewItem(r)}>
                  {language.common.detail}
                </a>
              </>
            </Space>
          )}
        />
      </Table>
      <AssignedDetailsDrawer
        open={previewItem !== undefined}
        detail={previewItem}
        onClose={() => setPreviewItem(undefined)}
        operationType={operationType}
        language={language}
      />
    </div>
  );
};
