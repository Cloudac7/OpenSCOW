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

"use client";

import { Divider } from "antd";
import React, { useContext } from "react";
import { PageTitle } from "src/components/page-title";
import { ScowParamsContext } from "src/components/scow-params-provider";
import { CreateMessageTypeForm } from "src/page-components/custom-message-type/create";
import { getLanguage } from "src/utils/i18n";

const SendMessagePage = () => {

  const { scowLangId } = useContext(ScowParamsContext);
  const language = getLanguage(scowLangId);

  return (
    <>
      <PageTitle titleText={language.createCustomMessageType.pageTitle}></PageTitle>
      <Divider />
      <div style={{ marginTop: "40px" }}>
        <CreateMessageTypeForm lang={language} />
      </div>

    </>
  );
};

export default SendMessagePage;
