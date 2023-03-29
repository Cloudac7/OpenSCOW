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

import { Progress, Table } from "antd";
import { useEffect, useState } from "react";
import { api } from "src/apis";
import { publicConfig } from "src/utils/config";
interface TransferInfo {
  recvCluster: string;
  filePath: string;
  transferSize: string;
  progress: string;
  speed: string;
  leftTime: string;
}
interface TransferData {
  cluster: string;
  files: TransferInfo[];
}
export const TransferInfoTable: React.FC = () => {
  const [transferData, setTransferData] = useState<TransferData[]>([]);
  const fetchTransferData = async () => {
    const newTransferData: TransferData[] = [];
    for (const cluster of publicConfig.CLUSTERS) {
      try {
        if (cluster.id === "hpc02") continue;
        const response = await api.queryTransferFiles({ query: { cluster: cluster.id } });
        newTransferData.push({
          cluster: cluster.id,
          files: response.result,
        });
      } catch (error) {
        console.log(error);
      }
    }
    setTransferData(newTransferData);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      fetchTransferData();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const columns = [
    {
      title: "发送集群",
      dataIndex: "cluster",
      sorter: (a, b) => a.cluster.localeCompare(b.cluster),
    },
    {
      title: "接收集群",
      dataIndex: "recvCluster",
    },
    {
      title: "文件",
      dataIndex: "filePath",
    },
    {
      title: "传输数量",
      dataIndex: "transferSize",
    },
    {
      title: "传输速度",
      dataIndex: "speed",
    },
    {
      title: "剩余时间",
      dataIndex: "leftTime",
    },
    {
      title: "当前进度",
      dataIndex: "progress",
      render: (progress: string) => <Progress percent={parseInt(progress.replace(/%/g, ""))} />,
    },
  ];

  const getDataSource = (datas: TransferData[]) => {
    return datas.flatMap((data) =>
      data.files.map((file) => ({ ...file, cluster: data.cluster })),
    );
  };

  return (
    <Table
      dataSource={getDataSource(transferData)}
      columns={columns}
      pagination={false}
    />
  );
};
