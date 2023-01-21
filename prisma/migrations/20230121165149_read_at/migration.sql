/*
  Warnings:

  - You are about to drop the column `readAt` on the `Notification` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Notification" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "recipient_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "read_at" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Notification" ("category", "content", "created_at", "id", "recipient_id") SELECT "category", "content", "created_at", "id", "recipient_id" FROM "Notification";
DROP TABLE "Notification";
ALTER TABLE "new_Notification" RENAME TO "Notification";
CREATE INDEX "Notification_recipient_id_idx" ON "Notification"("recipient_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
