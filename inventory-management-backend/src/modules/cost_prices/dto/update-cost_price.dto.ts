import { PartialType } from '@nestjs/mapped-types';
import { CreateCostPriceDto } from './create-cost_price.dto';

export class UpdateCostPriceDto extends PartialType(CreateCostPriceDto) {}
