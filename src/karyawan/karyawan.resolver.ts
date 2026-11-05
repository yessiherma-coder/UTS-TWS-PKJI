import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Absensi, Karyawan, Penjualan } from './karyawan.model';
import { KaryawanService } from './karyawan.service';
import { CreatePenjualanDto } from './dto/create-penjualan.dto';

@Resolver(() => Karyawan)
export class KaryawanResolver {
  constructor(private readonly karyawanService: KaryawanService) {}

  @Query(() => Karyawan, { name: 'karyawan', nullable: true })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.karyawanService.findOne(id);
  }

  @Query(() => [Absensi], { name: 'absensi' })
  getAbsensi(@Args('karyawanId', { type: () => Int }) karyawanId: number) {
    return this.karyawanService.getAbsensi(karyawanId);
  }

  @Mutation(() => Absensi)
  addAbsensi(
    @Args('karyawanId', { type: () => Int }) karyawanId: number,
    @Args('status') status: string,
  ) {
    return this.karyawanService.addAbsensi(karyawanId, status);
  }

  @Mutation(() => Penjualan)
  addPenjualan(
    @Args('karyawanId', { type: () => Int }) karyawanId: number,
    @Args('total_pendapatan', { type: () => Int }) total_pendapatan: number,
    @Args('tanggal_transaksi') tanggal_transaksi: string,
  ) {
    const dto: CreatePenjualanDto = {
      karyawanId,
      total_pendapatan,
      tanggal_transaksi,
    };
    return this.karyawanService.addPenjualan(dto);
  }
}