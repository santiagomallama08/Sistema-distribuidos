-- CreateTable
CREATE TABLE "Destino" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Nombre" TEXT NOT NULL,
    "Coordenadas" TEXT NOT NULL,
    "fecha" TEXT NOT NULL,
    "hora" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Destino_Nombre_key" ON "Destino"("Nombre");
