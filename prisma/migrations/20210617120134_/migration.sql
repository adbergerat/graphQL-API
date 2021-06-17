/*
  Warnings:

  - You are about to drop the column `email` on the `Event` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Event.email_unique";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "email";
