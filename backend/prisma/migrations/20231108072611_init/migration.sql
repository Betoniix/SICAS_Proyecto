/*
  Warnings:

  - You are about to drop the column `id_subscription` on the `Reservations` table. All the data in the column will be lost.
  - Added the required column `id_subject` to the `Reservations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Reservations` DROP FOREIGN KEY `Reservations_id_subscription_fkey`;

-- AlterTable
ALTER TABLE `Reservations` DROP COLUMN `id_subscription`,
    ADD COLUMN `id_subject` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Reservations` ADD CONSTRAINT `Reservations_id_subject_fkey` FOREIGN KEY (`id_subject`) REFERENCES `Subjects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
