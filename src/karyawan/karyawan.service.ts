import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePenjualanDto } from './dto/create-penjualan.dto';

@Injectable()
export class KaryawanService {
  constructor(private prisma: PrismaService) {}

  findOne(id: number) {
    return this.prisma.karyawan.findUnique({
      where: { id },
      include: { absensi: true, penjualan: true },
    });
  }

  getAbsensi(karyawanId: number) {
    return this.prisma.absensi.findMany({ where: { karyawanId } });
  }

  addAbsensi(karyawanId: number, status: string) {
    return this.prisma.absensi.create({
      data: { karyawanId, status, tanggal: new Date() },
    });
  }

  addPenjualan(dto: CreatePenjualanDto) {
    return this.prisma.penjualan.create({
      data: {
        karyawanId: dto.karyawanId,
        total_pendapatan: dto.total_pendapatan,
        tanggal_transaksi: new Date(dto.tanggal_transaksi),
      },
    });
  }
}