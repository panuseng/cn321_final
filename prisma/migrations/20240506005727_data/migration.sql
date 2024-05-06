-- CreateTable
CREATE TABLE "Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "poster" TEXT,
    "region" TEXT NOT NULL,
    "platforms" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "roomID" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "platform" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Game_roomID_key" ON "Game"("roomID");
