/*
  Warnings:

  - Added the required column `gameType` to the `Groups` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "GameType" AS ENUM ('BADMINTON', 'FOOTBALL', 'BASKETBALL', 'FLOORBALL', 'TENNIS', 'SQUASH', 'PADEL', 'VOLLEYBALL');

-- AlterTable
ALTER TABLE "Groups" ADD COLUMN     "gameType" "GameType" NOT NULL;
