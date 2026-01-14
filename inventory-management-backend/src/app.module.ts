import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { BatchesModule } from './modules/batches/batches.module';
import { CostPricesModule } from './modules/cost_prices/cost_prices.module';
import { ProductSuppliersModule } from './modules/product_suppliers/product_suppliers.module';
import { ProductUnitModule } from './modules/product_units/product_unit.module';
import { ProductsModule } from './modules/products/products.module';
import { RecipeModule } from './modules/recipe/recipe.module';
import { RecipeProductsModule } from './modules/recipe_products/recipe_products.module';
import { SalesModule } from './modules/sales/sales.module';
import { SaleItemsModule } from './modules/sale_items/sale_items.module';
import { SalePricesModule } from './modules/sale_prices/sale_prices.module';
import { SellableItemsModule } from './modules/sellable_items/sellable_items.module';
import { StockMovementsModule } from './modules/stock_movements/stock_movements.module';
import { SupplierProductModule } from './modules/supplier_products/supplier_product.module';
import { SuppliersModule } from './modules/suppliers/suppliers.module';
import { UnitsModule } from './modules/units/units.module';
import { UsersRefreshTokensModule } from './modules/users_refresh_tokens/users_refresh_tokens.module';
import { AuthModule } from './modules/auth/auth.module';
import { FileUploadModule } from './modules/file_upload/file_upload.module';

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
    FileUploadModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
