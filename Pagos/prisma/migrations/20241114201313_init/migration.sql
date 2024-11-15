/*
  Warnings:

  - You are about to drop the `Pagos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Pagos";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Pago" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Metodo" TEXT NOT NULL,
    "monto" TEXT NOT NULL,
    "fecha" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Pago_Metodo_key" ON "Pago"("Metodo");
