import { PartialType } from '@nestjs/mapped-types';
import { CreateSellableItemDto } from './create-sellable_item.dto';

export class UpdateSellableItemDto extends PartialType(CreateSellableItemDto) {}
