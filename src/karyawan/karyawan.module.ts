import { Module } from '@nestjs/common';
import { KaryawanController } from './karyawan.controller';
import { KaryawanService } from './karyawan.service';
import { KaryawanResolver } from './karyawan.resolver';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [KaryawanController],
  providers: [KaryawanService, KaryawanResolver, PrismaService],
  exports: [KaryawanService, PrismaService],
})
export class KaryawanModule {}