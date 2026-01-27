import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsInt,
  Min,
  IsUUID,
} from 'class-validator';
export class CreateProductDto  {
  @ApiProperty({ description: 'Name of the product' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Barcode of the product', required: false })
  @IsOptional()
  @IsString()
  barcode?: string | null;

  @ApiProperty({ description: 'Minimum stock level', minimum: 0 })
  @IsInt()
  @Min(0)
  minimumStock: number;
}
