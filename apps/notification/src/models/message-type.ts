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

export interface Template {
  default: string;
  en?: string;
  zhCn?: string;
}
// 定义 messageTypesMap 的值类型
export interface MessageTypeInfo {
  type: string;
  titleTemplate: Template;
  category: string;
  categoryTemplate: Template;
  contentTemplate: Template;
}

export enum InternalMessageType {
  AccountOverdue = "AccountOverdue",
  AccountRechargeSuccess = "AccountRechargeSuccess",
  AccountLowBalance = "AccountLowBalance",
  AccountBalance = "AccountBalance",
  AccountLocked = "AccountLocked",
  AccountRestored = "AccountRestored",
  JobStarted = "JobStarted",
  JobCompleted = "JobCompleted",
  JobAbnormalTermination = "JobAbnormalTermination",
}

export enum AdminMessageType {
  SystemNotification = "SystemNotification",
}

export const adminMessageTypesMap = new Map<AdminMessageType, MessageTypeInfo>([
  [AdminMessageType.SystemNotification, {
    type: "SystemNotification",
    titleTemplate: {
      default: "系统公告",
      en: "System Notification",
      zhCn: "系统公告",
    },
    category: "Admin",
    categoryTemplate: {
      default: "Admin Messages",
      en: "Admin Messages",
      zhCn: "管理员消息",
    },
    contentTemplate: {
      default: "",
    },
  }],
]);

// 使用 enum 作为 map 的 key 的类型
export const internalMessageTypesMap = new Map<InternalMessageType, MessageTypeInfo>([
  // Account
  [InternalMessageType.AccountOverdue, {
    type: "AccountOverdue",
    titleTemplate: {
      default: "欠费通知",
      en: "Account Overdue",
      zhCn: "欠费通知",
    },
    category: "Account",
    categoryTemplate: {
      default: "账户消息",
      en: "Account Messages",
      zhCn: "账户消息",
    },
    contentTemplate: {
      default: "截至【{__time__}】，账户 {__accountName__} 已经欠费 {__amount__} 元，请及时交费。",
      en: "As of [{__time__}], the account {__accountName__} has owed {__amount__} yuan. Please pay the fee in time.",
      zhCn: "截至【{__time__}】，账户 {__accountName__} 已经欠费 {__amount__} 元，请及时交费。",
    },
  }],
  [InternalMessageType.AccountRechargeSuccess, {
    type: "AccountRechargeSuccess",
    titleTemplate: {
      default: "充值成功通知",
      en: "Account Recharge Success",
      zhCn: "充值成功通知",
    },
    category: "Account",
    categoryTemplate: {
      default: "账户消息",
      en: "Account Messages",
      zhCn: "账户消息",
    },
    contentTemplate: {
      default: "账户 {__accountName__} 已于【{__time__}】成功充值 {__chargeAmount__} 元，当前余额为 {__amount__} 元。",
      en: "The account {__accountName__} has been successfully topped up with {__chargeAmount__} yuan at [{__time__}]. "
        + "The current balance is {__amount__} yuan.",
      zhCn: "账户 {__accountName__} 已于【{__time__}】成功充值 {__chargeAmount__} 元，当前余额为 {__amount__} 元。",
    },
  }],
  [InternalMessageType.AccountLowBalance, {
    type: "AccountLowBalance",
    titleTemplate: {
      default: "余额不足提醒",
      en: "Account Low Balance",
      zhCn: "余额不足提醒",
    },
    category: "Account",
    categoryTemplate: {
      default: "账户消息",
      en: "Account Messages",
      zhCn: "账户消息",
    },
    contentTemplate: {
      default: "截至【{__time__}】，账户 {__accountName__} 余额已不足 20 元，请及时交费。",
      en: "As of [{__time__}], the balance of account {__accountName__} is less than 20 yuan. Please pay in time.",
      zhCn: "截至【{__time__}】，账户 {__accountName__} 余额已不足 20 元，请及时交费。",
    },
  }],
  [InternalMessageType.AccountBalance, {
    type: "AccountBalance",
    titleTemplate: {
      default: "余额变动通知",
      en: "Account Balance",
      zhCn: "余额变动通知",
    },
    category: "Account",
    categoryTemplate: {
      default: "账户消息",
      en: "Account Messages",
      zhCn: "账户消息",
    },
    contentTemplate: {
      default: "账户 {__accountName__} 余额发生变动，支出/收入 {__amount__} 元。",
      en: "Balance change in account {__accountName__}: expenditure/income of {__amount__}.",
      zhCn: "账户 {__accountName__} 余额发生变动，支出/收入 {__amount__} 元。",
    },
  }],
  [InternalMessageType.AccountLocked, {
    type: "AccountLocked",
    titleTemplate: {
      default: "账户封锁通知",
      en: "Account Locked",
      zhCn: "账户封锁通知",
    },
    category: "Account",
    categoryTemplate: {
      default: "账户消息",
      en: "Account Messages",
      zhCn: "账户消息",
    },
    contentTemplate: {
      default: "账户 {__accountName__} 已于【{__time__}】被封锁，您可以联系管理员申请解封。",
      en: "The account {__accountName__} has been blocked at [{__time__}]. "
        + "You can contact the administrator to request unblocking.",
      zhCn: "账户 {__accountName__} 已于【{__time__}】被封锁，您可以联系管理员申请解封。",
    },
  }],
  [InternalMessageType.AccountRestored, {
    type: "AccountRestored",
    titleTemplate: {
      default: "账户恢复通知",
      en: "Account Restored",
      zhCn: "账户恢复通知",
    },
    category: "Account",
    categoryTemplate: {
      default: "账户消息",
      en: "Account Messages",
      zhCn: "账户消息",
    },
    contentTemplate: {
      default: "账户 {__accountName__} 已于【{__time__}】恢复正常。",
      en: "Account {__accountName__} has been restored to normal at [{__time__}].",
      zhCn: "账户 {__accountName__} 已于【{__time__}】恢复正常。",
    },
  }],

  // Job
  // [InternalMessageType.JobStarted, {
  //   type: "JobStarted",
  //   titleTemplate: {
  //     default: "作业开始",
  //     en: "Job Started",
  //     zhCn: "作业开始",
  //   },
  //   category: "Job",
  //   categoryTemplate: {
  //     default: "作业消息",
  //     en: "Job Messages",
  //     zhCn: "作业消息",
  //   },
  //   contentTemplate: {
  //     default: "",
  //   },
  // }],
  [InternalMessageType.JobCompleted, {
    type: "JobCompleted",
    titleTemplate: {
      default: "作业完成",
      en: "Job Completed",
      zhCn: "作业完成",
    },
    category: "Job",
    categoryTemplate: {
      default: "作业消息",
      en: "Job Messages",
      zhCn: "作业消息",
    },
    contentTemplate: {
      default: "作业【__jobId__】已于【__time__】运行完成。",
      en: "Job [__jobId__] completed at [__time__].",
      zhCn: "作业【__jobId__】已于【__time__】运行完成。",
    },
  }],
  // [InternalMessageType.JobAbnormalTermination, {
  //   type: "JobAbnormalTermination",
  //   titleTemplate: {
  //     default: "作业异常终止",
  //     en: "Job Abnormal Termination",
  //     zhCn: "作业异常终止",
  //   },
  //   category: "Job",
  //   categoryTemplate: {
  //     default: "作业消息",
  //     en: "Job Messages",
  //     zhCn: "作业消息",
  //   },
  //   contentTemplate: {
  //     default: "",
  //   },
  // }],
  // 其他默认数据...
]);
