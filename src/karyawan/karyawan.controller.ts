import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { KaryawanService } from './karyawan.service';
import { CreatePenjualanDto } from './dto/create-penjualan.dto';

@Controller('karyawan')
export class KaryawanController {
  constructor(private readonly service: KaryawanService) {}

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Get(':id/absensi')
  getAbsensi(@Param('id', ParseIntPipe) id: number) {
    return this.service.getAbsensi(id);
  }

  @Post(':id/absensi')
  addAbsensi(@Param('id', ParseIntPipe) id: number, @Body('status') status: string) {
    return this.service.addAbsensi(id, status);
  }

  @Post('penjualan')
  addPenjualan(@Body() dto: CreatePenjualanDto) {
    return this.service.addPenjualan(dto);
  }
}