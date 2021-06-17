-- DropIndex
DROP INDEX "Community_userId_unique";

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "communityId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Event.email_unique" ON "Event"("email");

-- AddForeignKey
ALTER TABLE "Event" ADD FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE CASCADE ON UPDATE CASCADE;
