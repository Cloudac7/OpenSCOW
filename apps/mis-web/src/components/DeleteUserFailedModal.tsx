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

import { Modal } from "antd";
import { prefix, useI18nTranslateToString } from "src/i18n";
import { DeleteFailedReason } from "src/models/User";
interface Message {
  type: DeleteFailedReason;
  userId: string;
  accounts: string[];
}

interface Props {
  message: Message;
  onClose: () => void;
  open: boolean;
}

const p = prefix("component.others.");

export const DeleteUserFailedModal: React.FC<Props> = ({ message,onClose,open }) => {
  const t = useI18nTranslateToString();
  const { userId,accounts } = message;
  return (
    <Modal
      title={`${t(p("deleteFailed"))}`}
      open={open}
      onOk={onClose}
      onCancel={onClose}
      width={"620px"} // 设置Modal宽度
    >
      {(message.type === DeleteFailedReason.ACCOUNTS_OWNER ?
        <div dangerouslySetInnerHTML={{ __html: t(p("accountsOwnerPrompt"), [userId, accounts.join(",")]) }} /> :
        <div>{t(p("runningJobsPrompt"))}</div>
      )}
    </Modal>
  );
};
