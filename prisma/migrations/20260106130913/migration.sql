/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `auth_account` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "auth_account" DROP COLUMN "deletedAt";
