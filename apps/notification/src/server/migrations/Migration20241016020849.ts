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

/* eslint-disable @stylistic/max-len */
import { Migration } from "@mikro-orm/migrations";

export class Migration20241016020849 extends Migration {

  async up(): Promise<void> {
    this.addSql("alter table `message_targets` drop foreign key `message_targets_message_id_foreign`;");

    this.addSql("alter table `user_message_read` drop foreign key `user_message_read_message_id_foreign`;");

    this.addSql("alter table `admin_message_configs` add `expired_after_seconds` bigint null;");

    this.addSql("alter table `messages` add `expired_at` DATETIME(6) null;");
    this.addSql("alter table `messages` modify `id` bigint unsigned not null auto_increment;");

    this.addSql("alter table `message_targets` modify `id` bigint unsigned not null auto_increment, modify `message_id` bigint unsigned not null;");
    this.addSql("alter table `message_targets` add constraint `message_targets_message_id_foreign` foreign key (`message_id`) references `messages` (`id`) on update cascade on delete cascade;");

    this.addSql("alter table `user_message_read` modify `id` bigint unsigned not null auto_increment, modify `message_id` bigint unsigned not null;");
    this.addSql("alter table `user_message_read` add constraint `user_message_read_message_id_foreign` foreign key (`message_id`) references `messages` (`id`) on update cascade on delete cascade;");
  }

  async down(): Promise<void> {
    this.addSql("alter table `message_targets` drop foreign key `message_targets_message_id_foreign`;");

    this.addSql("alter table `user_message_read` drop foreign key `user_message_read_message_id_foreign`;");

    this.addSql("alter table `admin_message_configs` drop column `expired_after_seconds`;");

    this.addSql("alter table `messages` drop column `expired_at`;");

    this.addSql("alter table `messages` modify `id` int unsigned not null auto_increment;");

    this.addSql("alter table `message_targets` modify `id` int unsigned not null auto_increment, modify `message_id` int unsigned not null;");
    this.addSql("alter table `message_targets` add constraint `message_targets_message_id_foreign` foreign key (`message_id`) references `messages` (`id`) on update cascade;");

    this.addSql("alter table `user_message_read` modify `id` int unsigned not null auto_increment, modify `message_id` int unsigned not null;");
    this.addSql("alter table `user_message_read` add constraint `user_message_read_message_id_foreign` foreign key (`message_id`) references `messages` (`id`) on update cascade;");
  }

}
