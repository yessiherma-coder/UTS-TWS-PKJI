import { IsInt, IsNumber, IsISO8601, Min } from 'class-validator';

export class CreatePenjualanDto {
  @IsInt()
  karyawanId: number;

  @IsNumber()
  @Min(0)
  total_pendapatan: number;

  @IsISO8601()
  tanggal_transaksi: string;
}