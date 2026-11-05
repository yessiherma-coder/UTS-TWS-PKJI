import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Absensi {
  @Field(() => Int)
  id: number;

  @Field()
  tanggal: Date;

  @Field()
  status: string;
}

@ObjectType()
export class Penjualan {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  total_pendapatan: number;

  @Field()
  tanggal_transaksi: Date;
}

@ObjectType()
export class Karyawan {
  @Field(() => Int)
  id: number;

  @Field()
  nama: string;

  @Field(() => [Absensi])
  absensi: Absensi[];

  @Field(() => [Penjualan])
  penjualan: Penjualan[];
}