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

import { Select } from "antd";
import React, { useContext } from "react";
import { getLanguage } from "src/utils/i18n";

import { ScowParamsContext } from "./scow-params-provider";

export const NEVER_EXPIRES_VALUE = -1;

interface Props {
  value?: number;
  loading?: boolean;
  onChange?: (value: number) => void;
  style?: React.CSSProperties;
}

export const ExpirationTimeSelect = ({ value, loading, onChange, style }: Props) => {
  const { scowLangId } = useContext(ScowParamsContext);
  const lang = getLanguage(scowLangId).expirationTimeSelect;

  const timeOptions = [
    { value: 7, label: lang.oneWeek },
    { value: 15, label: lang.halfAMonth },
    { value: 30, label: lang.oneMonth },
    { value: 90, label: lang.threeMonth },
    { value: 180, label: lang.halfAYear },
    { value: 365, label: lang.oneYear },
    { value: NEVER_EXPIRES_VALUE, label: lang.neverExpires },
  ];


  const handleChange = (value: number) => {
    onChange?.(value);
  };

  return (
    <Select
      style={style}
      value={value ?? NEVER_EXPIRES_VALUE}
      placeholder={lang.selectExpirationTime}
      onChange={handleChange}
      loading={loading}
    >
      {timeOptions.map((option) => (
        <Select.Option
          key={option.label}
          value={option.value}
        >
          {option.label}
        </Select.Option>
      ))}
    </Select>
  );
};
