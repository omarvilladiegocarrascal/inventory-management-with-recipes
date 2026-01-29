import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductFilesService } from './product_files.service';
import { CreateProductFileDto } from './dto/create-product_file.dto';
import { UpdateProductFileDto } from './dto/update-product_file.dto';

@Controller('product-files')
export class ProductFilesController {
  constructor(private readonly productFilesService: ProductFilesService) {}

  @Post()
  create(@Body() createProductFileDto: CreateProductFileDto) {
    return this.productFilesService.create(createProductFileDto);
  }

  @Get()
  findAll() {
    return this.productFilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productFilesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductFileDto: UpdateProductFileDto,
  ) {
    return this.productFilesService.update(+id, updateProductFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productFilesService.remove(+id);
  }
}
