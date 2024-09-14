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

export interface UserInfo {
  identityId: string;
  name?: string;
  token: string;
}

export interface PortalValidateToken {
  identityId: string;
  name: string;
}

export interface NavItemProps {
  path: string;
  clickToPath?: string;
  text: string;
  Icon: React.ReactNode | React.ForwardRefExoticComponent<{}> ;
  match?: (spec: string, pathname: string) => boolean;
  children?: NavItemProps[];
  clickable?: boolean
  openInNewPage?: boolean;
  handleClick?: () => void
  hideIfNotActive?: boolean;
}

export interface UserLink {
  text: string;
  url: string;
  openInNewPage?: boolean;
}
