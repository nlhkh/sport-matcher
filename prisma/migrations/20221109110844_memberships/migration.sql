-- CreateTable
CREATE TABLE "Memberships" (
    "playersId" TEXT NOT NULL,
    "groupsId" INTEGER NOT NULL,

    CONSTRAINT "Memberships_pkey" PRIMARY KEY ("playersId","groupsId")
);

-- AddForeignKey
ALTER TABLE "Memberships" ADD CONSTRAINT "Memberships_playersId_fkey" FOREIGN KEY ("playersId") REFERENCES "Players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Memberships" ADD CONSTRAINT "Memberships_groupsId_fkey" FOREIGN KEY ("groupsId") REFERENCES "Groups"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
