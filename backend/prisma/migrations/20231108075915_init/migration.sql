/*
  Warnings:

  - A unique constraint covering the columns `[percentage]` on the table `Capacity` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Capacity_percentage_key` ON `Capacity`(`percentage`);
