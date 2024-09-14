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

export type I18nStringType = string | {
  i18n: {
    default: string,
    en?: string,
    zh_cn?: string,
  }
};

// languageDic for partitionsManagement
export const languageDic = {
  zh_cn: {
    common: {
      default: "默认",
      zhCn: "简体中文",
      en: "英文",
      submit: "提交",
      confirm: "确认",
      cancel: "取消",
      save: "保存",
      serialNumber: "序号",
      title: "标题",
    },
    createCustomMessageType : {
      pageTitle: "新建自定义消息类型",
      create: {
        messageType: "消息类型",
        messageTypePlaceholder: "请输入消息类型，例如：JobFinished",
        messageCategory: "消息类别",
        messageCategoryPlaceholder: "请输入消息类别，例如：Job",
        messageTitle: "消息标题",
        messageTitleTip: "消息在前端展示时的标题",
        defaultMessageTitleRule: "请输入默认消息标题",
        defaultMessageTitlePlaceholder: "请输入默认消息标题，如：作业完成",
        defaultMessageTitleTip: "未启用国际化时的默认展示标题",
        zhCnMessageTitleRule: "请输入简体中文消息标题",
        enMessageTitleRule: "请输入英文消息标题",
        messageCategoryTip: "消息在前端展示时的类别",
        defaultMessageCategoryRule: "请输入默认消息类别",
        defaultMessageCategoryPlaceholder: "请输入默认消息类别，如：作业通知",
        defaultMessageCategoryTip: "未启用国际化时的默认展示消息类别",
        zhCnMessageCategoryRule: "请输入简体中文消息类别",
        enMessageCategoryRule: "请输入英文消息类别",
        messageContentTemp: "消息内容模板",
        messageContentTempTip: "前端展示时，会将消息元数据填充到消息内容模板中",
        defaultMessageContentTempRule: "请输入默认消息内容模板",
        defaultMessageContentTempPlaceholder: "请输入默认消息内容模板，如：您在{__time__}提交的作业{__id__}已结束，请及时查看",
        defaultMessageContentTempTip: "未启用国际化时的默认展示的消息内容。需填充的变量采用如下格式：{__variableName__}",
        zhCnMessageContentTempRule: "请输入简体中文消息内容模板",
        enMessageContentTempRule: "请输入英文消息内容模板",
      },
      previewCreateModal: {
        confirmCreate: "确认创建",
        createSuccess: "创建成功",
        formCantEmpty: "表单不能为空",
      },
    },
    messageConfig: {
      pageTitle: "消息设置",
      messageConfigTable: {
        saveSuccess: "保存成功",
        formError: "表单数据错误，请联系管理员",
        saveError: "保存数据出错",
      },
      useMessageConfigColumns: {
        messageType: "消息类型",
        category: "分类",
        noticeType: "通知类型",
        operation: "操作",
        configuration: "配置",
      },
      messageConfigModal: {
        modifySuccess: "修改成功",
        authorization: "订阅设置",
        dontAllowCancel: "不允许用户取消订阅以下类型的通知",
        inputTitle: "请输入标题",
      },
    },
    sendMessage: {
      pageTitle: "发送消息",
      pageTip: "该消息将以系统公告的形式发送",
      messageForm: {
        sendErrorInfo: "消息发送失败，请检查表单数据或联系管理员",
        sendSuccessInfo: "消息发送成功",
        checkboxSelectInfo: "请选择至少一个发送方式",
        inputTitle: "请输入标题",
        titleLengthTip: "标题长度应小于20字符",
        content: "正文",
        contentLengthTip: "内容长度应小于150字符",
        inputContent: "请输入正文",
        sendType: "发送方式",
        selectSentType: "请选择发送方式",
        sendMsg: "发送消息",
      },
    },
    notification: {
      pageTitle: "我的消息",
      markAllReadErrorInfo: "标记全部已读失败",
      markAllReadSuccessInfo: "标记全部已读成功",
      deleteReadMsgErrorInfo: "删除已读消息失败",
      deleteReadMsgSuccessInfo: "删除已读消息成功",
      markAllRead: "全部已读",
      deleteReadMsg: "删除已读",
      listTable: {
        deleteError: "删除失败",
        deleteSuccess: "删除成功",
        all: "全部",
        systemNotif: "系统通知",
        accountNotif: "账户通知",
        jobNotif: "作业通知",
      },
      list: {
        read: "已读",
        unread: "未读",
      },
    },
    subscription: {
      pageTitle: "消息订阅",
      subscriptionTable: {
        saveSuccess: "保存成功",
        formError: "表单数据错误，请联系管理员",
        saveError: "保存数据出错",
      },
      useSubscriptionColumns: {
        messageType: "消息类型",
        category: "分类",
        noticeType: "通知类型",
      },
    },
  },
  en: {
    common: {
      default: "Default",
      zhCn: "Simplified Chinese",
      en: "English",
      submit: "Submit",
      confirm: "Confirm",
      cancel: "Cancel",
      save: "Save",
      serialNumber: "Serial Num",
      title: "Title",
    },
    createCustomMessageType: {
      pageTitle: "Create a custom message type",
      create: {
        messageType: "Message Type",
        messageTypePlaceholder: "Please enter the message type, for example: JobFinished",
        messageCategory: "Message Category",
        messageCategoryPlaceholder: "Please enter a message category, for example: Job",
        messageTitle: "Message Title",
        messageTitleTip: "The title of the message when it is displayed on the front end",
        defaultMessageTitleRule: "Please enter a default message title",
        defaultMessageTitlePlaceholder: "Please enter a default message title, such as: Job Completed",
        defaultMessageTitleTip: "Default display title when internationalization is not enabled",
        zhCnMessageTitleRule: "Please enter the message title in Simplified Chinese",
        enMessageTitleRule: "Please enter the message title in English",
        messageCategoryTip: "The category of the message when it is displayed on the front end",
        defaultMessageCategoryRule: "Please enter a default message category",
        defaultMessageCategoryPlaceholder: "Please enter the default message category, such as: Job Notification",
        defaultMessageCategoryTip: "Default message category when internationalization is not enabled",
        zhCnMessageCategoryRule: "Please enter the message category in Simplified Chinese",
        enMessageCategoryRule: "Please enter the message category in English",
        messageContentTemp: "Message Content Template",
        messageContentTempTip: "When displayed on the front end, "
          + "the message metadata will be filled into the message content template",
        defaultMessageContentTempRule: "Please enter a default message content template",
        defaultMessageContentTempPlaceholder: "Please enter the default message content template, such as: "
          + "The assignment {__id__} you submitted at {__time__} has ended, please check it in time",
        defaultMessageContentTempTip: "The default message content displayed when internationalization is not enabled. "
          + "The variables to be filled in are in the following format: {__variableName__}",
        zhCnMessageContentTempRule: "Please enter the message content template in Simplified Chinese",
        enMessageContentTempRule: "Please enter the message content template in English",
      },
      previewCreateModal: {
        confirmCreate: "Confirm Creation",
        createSuccess: "Create Success",
        formCantEmpty: "The form cannot be empty",
      },
    },
    messageConfig: {
      pageTitle: "Message Config",
      messageConfigTable: {
        saveSuccess: "Saved successfully",
        formError: "The form data is incorrect, please contact the administrator",
        saveError: "Error saving data",
      },
      useMessageConfigColumns: {
        messageType: "Message Type",
        category: "Category",
        noticeType: "Notice Type",
        operation: "Operation",
        configuration: "configuration",
      },
      messageConfigModal: {
        inputTitle: "Please enter a title",
        modifySuccess: "Modification successful",
        authorization: "Subscription Settings",
        dontAllowCancel: "Do not allow users to unsubscribe from the following types of notifications.",
      },
    },
    sendMessage: {
      pageTitle: "Send Message",
      pageTip: "This message will be sent as a system announcement",
      messageForm: {
        sendErrorInfo: "Message sending failed, please check the form data or contact the administrator",
        sendSuccessInfo: "Message sent successfully",
        checkboxSelectInfo: "Please select at least one delivery method",
        inputTitle: "Please enter a title",
        titleLengthTip: "Title length should be less than 20 characters",
        content: "content",
        contentLengthTip: "Content length should be less than 150 characters",
        inputContent: "Please enter a content",
        sendType: "Sending method",
        selectSentType: "Please select the delivery method",
        sendMsg: "Send Message",
      },
    },
    notification: {
      pageTitle: "Notification",
      markAllReadErrorInfo: "Failed to mark all read",
      markAllReadSuccessInfo: "Mark all read successfully",
      deleteReadMsgErrorInfo: "Failed to delete read messages",
      deleteReadMsgSuccessInfo: "Deleted read message successfully",
      markAllRead: "Mark read",
      deleteReadMsg: "Delete read messages",
      listTable: {
        deleteError: "Deletion failed",
        deleteSuccess: "Deleted successfully",
        all: "All",
        systemNotif: "System Notifications",
        accountNotif: "Account Notifications",
        jobNotif: "Job Notifications",
      },
      list: {
        read: "read",
        unread: "unread",
      },
    },
    subscription: {
      pageTitle: "Message Subscription",
      subscriptionTable: {
        saveSuccess: "Saved Successfully",
        formError: "The form data is incorrect, please contact the administrator",
        saveError: "Error saving data",
      },
      useSubscriptionColumns: {
        messageType: "Message Type",
        category: "Category",
        noticeType: "Notice Type",
      },
    },
  },
};

export type I18nDicType = typeof languageDic.zh_cn;
