-- CreateTable
CREATE TABLE "Pagos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Metodo" TEXT NOT NULL,
    "monto" TEXT NOT NULL,
    "fecha" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Pagos_Metodo_key" ON "Pagos"("Metodo");
