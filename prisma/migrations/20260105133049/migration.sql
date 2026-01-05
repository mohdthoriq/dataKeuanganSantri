-- DropForeignKey
ALTER TABLE "auth_account" DROP CONSTRAINT "auth_account_santriId_fkey";

-- AlterTable
ALTER TABLE "auth_account" ALTER COLUMN "santriId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "auth_account" ADD CONSTRAINT "auth_account_santriId_fkey" FOREIGN KEY ("santriId") REFERENCES "Santri"("id") ON DELETE SET NULL ON UPDATE CASCADE;
