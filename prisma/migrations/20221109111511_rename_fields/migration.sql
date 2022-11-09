/*
  Warnings:

  - The primary key for the `Memberships` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `groupsId` on the `Memberships` table. All the data in the column will be lost.
  - You are about to drop the column `playersId` on the `Memberships` table. All the data in the column will be lost.
  - The primary key for the `Participants` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `gamesId` on the `Participants` table. All the data in the column will be lost.
  - You are about to drop the column `playersId` on the `Participants` table. All the data in the column will be lost.
  - Added the required column `groupId` to the `Memberships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerId` to the `Memberships` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gameId` to the `Participants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `playerId` to the `Participants` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Memberships" DROP CONSTRAINT "Memberships_groupsId_fkey";

-- DropForeignKey
ALTER TABLE "Memberships" DROP CONSTRAINT "Memberships_playersId_fkey";

-- DropForeignKey
ALTER TABLE "Participants" DROP CONSTRAINT "Participants_gamesId_fkey";

-- DropForeignKey
ALTER TABLE "Participants" DROP CONSTRAINT "Participants_playersId_fkey";

-- AlterTable
ALTER TABLE "Memberships" DROP CONSTRAINT "Memberships_pkey",
DROP COLUMN "groupsId",
DROP COLUMN "playersId",
ADD COLUMN     "groupId" INTEGER NOT NULL,
ADD COLUMN     "playerId" TEXT NOT NULL,
ADD CONSTRAINT "Memberships_pkey" PRIMARY KEY ("playerId", "groupId");

-- AlterTable
ALTER TABLE "Participants" DROP CONSTRAINT "Participants_pkey",
DROP COLUMN "gamesId",
DROP COLUMN "playersId",
ADD COLUMN     "gameId" INTEGER NOT NULL,
ADD COLUMN     "playerId" TEXT NOT NULL,
ADD CONSTRAINT "Participants_pkey" PRIMARY KEY ("playerId", "gameId");

-- AddForeignKey
ALTER TABLE "Memberships" ADD CONSTRAINT "Memberships_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Memberships" ADD CONSTRAINT "Memberships_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participants" ADD CONSTRAINT "Participants_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participants" ADD CONSTRAINT "Participants_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Games"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
