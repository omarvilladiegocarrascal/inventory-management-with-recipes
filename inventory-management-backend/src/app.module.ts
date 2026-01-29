import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { CostPricesModule } from './modules/cost_prices/cost_prices.module';
import { UsersRefreshTokensModule } from './modules/users_refresh_tokens/users_refresh_tokens.module';
import { AuthModule } from './modules/auth/auth.module';
import { BatchesModule } from './modules/inventory/batches/batches.module';
import { ProductSuppliersModule } from './modules/inventory/product_suppliers/product_suppliers.module';
import { ProductUnitModule } from './modules/inventory/product_units/product_unit.module';
import { ProductsModule } from './modules/inventory/products/products.module';
import { RecipeModule } from './modules/recipes/recipes/recipe.module';
import { RecipeProductsModule } from './modules/recipes/recipe_products/recipe_products.module';
import { SalesModule } from './modules/sales/sales/sales.module';
import { SaleItemsModule } from './modules/sales/sale_items/sale_items.module';
import { SalePricesModule } from './modules/sales/sale_prices/sale_prices.module';
import { SellableItemsModule } from './modules/sales/sellable_items/sellable_items.module';
import { StockMovementsModule } from './modules/inventory/stock_movements/stock_movements.module';
import { SupplierProductModule } from './modules/inventory/supplier_products/supplier_product.module';
import { SuppliersModule } from './modules/inventory/suppliers/suppliers.module';
import { UnitsModule } from './modules/inventory/units/units.module';
import { FileUploadModule } from './modules/files/file_upload/file_upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: typeorm,
    }),
    UsersModule,
    BatchesModule,
    CostPricesModule,
    ProductSuppliersModule,
    ProductUnitModule,
    ProductsModule,
    RecipeModule,
    RecipeProductsModule,
    SalesModule,
    SaleItemsModule,
    SalePricesModule,
    SellableItemsModule,
    StockMovementsModule,
    SupplierProductModule,
    SuppliersModule,
    UnitsModule,
    UsersRefreshTokensModule,
    AuthModule,
    FileUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
