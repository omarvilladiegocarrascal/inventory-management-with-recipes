import { ApiProperty } from "@nestjs/swagger";
import { CreateProductDto } from "./create-product.dto";
import { CreateUnitDto } from "src/modules/units/dto/create-unit.dto";

export class CreateProductWithFileDto extends CreateProductDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'Product file',
  })
  file: Express.Multer.File;
}