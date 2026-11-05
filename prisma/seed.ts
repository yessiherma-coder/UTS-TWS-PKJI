import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.karyawan.create({
    data: {
      nama: 'Karyawan Contoh',
      absensi: {
        create: [
          { tanggal: new Date('2026-11-03'), status: 'Hadir' },
          { tanggal: new Date('2026-11-04'), status: 'Izin' },
        ],
      },
      penjualan: {
        create: [
          { total_pendapatan: 50018, tanggal_transaksi: new Date('2026-11-03') },
          { total_pendapatan: 75018, tanggal_transaksi: new Date('2026-11-04') },
        ],
      },
    },
  });
}

main()
  .then(() => console.log('Seed berhasil'))
  .finally(() => prisma.$disconnect());