/*
  Warnings:

  - You are about to drop the column `name` on the `cars` table. All the data in the column will be lost.
  - Added the required column `brand` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cars` DROP COLUMN `name`,
    ADD COLUMN `brand` VARCHAR(191) NOT NULL;
