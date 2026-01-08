import { PartialType } from '@nestjs/mapped-types';
import { CreateSalePriceDto } from './create-sale_price.dto';

export class UpdateSalePriceDto extends PartialType(CreateSalePriceDto) {}
