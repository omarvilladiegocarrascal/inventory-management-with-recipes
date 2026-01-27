import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SupplierProductService } from './supplier_product.service';
import { CreateSupplierProductDto } from './dto/create-supplier_product.dto';
import { UpdateSupplierProductDto } from './dto/update-supplier_product.dto';

@Controller('supplier-product')
export class SupplierProductController {
  constructor(
    private readonly supplierProductService: SupplierProductService,
  ) {}

  @Post()
  create(@Body() createSupplierProductDto: CreateSupplierProductDto) {
    return this.supplierProductService.create(createSupplierProductDto);
  }

  @Get()
  findAll() {
    return this.supplierProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.supplierProductService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSupplierProductDto: UpdateSupplierProductDto,
  ) {
    return this.supplierProductService.update(+id, updateSupplierProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.supplierProductService.remove(+id);
  }
}
