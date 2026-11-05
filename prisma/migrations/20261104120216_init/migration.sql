-- CreateTable
CREATE TABLE "Karyawan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nama" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Absensi" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tanggal" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "karyawanId" INTEGER NOT NULL,
    CONSTRAINT "Absensi_karyawanId_fkey" FOREIGN KEY ("karyawanId") REFERENCES "Karyawan" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Penjualan" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "total_pendapatan" INTEGER NOT NULL,
    "tanggal_transaksi" DATETIME NOT NULL,
    "karyawanId" INTEGER NOT NULL,
    CONSTRAINT "Penjualan_karyawanId_fkey" FOREIGN KEY ("karyawanId") REFERENCES "Karyawan" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
