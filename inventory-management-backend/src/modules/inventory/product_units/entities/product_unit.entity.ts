import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Unit } from '../../units/entities/unit.entity';
import { Product } from '../../products/entities/product.entity';
import { v4 as uuidv4 } from 'uuid';
@Entity()
export class ProductUnit {
  @ApiProperty({ description: 'Unique identifier for the product unit' })
  @PrimaryGeneratedColumn()
  id: string = uuidv4();

  @ManyToOne(() => Unit, (unit) => unit.productUnits)
  @JoinColumn({ name: 'unit_id' })
  unit: Unit;

  @ManyToOne(() => Product, (product) => product.productUnits)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
