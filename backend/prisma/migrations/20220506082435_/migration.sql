/*
  Warnings:

  - You are about to drop the column `gameDates` on the `Game` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Game" DROP COLUMN "gameDates",
ADD COLUMN     "gameDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "skillLevel" INTEGER NOT NULL DEFAULT 1;
