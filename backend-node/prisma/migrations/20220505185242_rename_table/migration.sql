/*
  Warnings:

  - You are about to drop the `GameAd` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GameAd" DROP CONSTRAINT "GameAd_sportId_fkey";

-- DropForeignKey
ALTER TABLE "GameAd" DROP CONSTRAINT "GameAd_userId_fkey";

-- DropTable
DROP TABLE "GameAd";

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "sportId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "generation" INTEGER NOT NULL,
    "gameDates" TIMESTAMP(3)[],

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
