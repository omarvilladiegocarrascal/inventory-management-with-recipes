import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FileUploadService } from '../file_upload/file_upload.service';
import { ProductFile } from '../file_upload/files_types/product_files/entities/product_file.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
     private readonly dataSource: DataSource,
     private fileUploadService: FileUploadService
  ) {}
  
  async create(createProductDto: CreateProductDto, file: Express.Multer.File): Promise<Product> {
    return new Promise(async (resolve, reject) => {
      const queryRunner = this.dataSource.createQueryRunner();

      await queryRunner.connect();
      await queryRunner.startTransaction();

      try {
        if (!createProductDto.name) {
          throw new BadRequestException('Product name is required');
        }

        /** 1️⃣ Create product */
        const product = queryRunner.manager.create(Product, {
          name: createProductDto.name,
          barcode: createProductDto.barcode,
          minimumStock: createProductDto.minimumStock,
          isActive: true,
        });

        const newProduct = await queryRunner.manager.save(product);

        /** 2️⃣ Save file if provided */
       
        const newFile = await this.fileUploadService.saveFile(file);
        

        /** 3️⃣ Create product-file relation if file exists */
        if (newFile) {
          const productFile = queryRunner.manager.create(ProductFile, {
            product: newProduct,
            file: newFile,
          });

          await queryRunner.manager.save(productFile);
        }

        /** 4️⃣ Find final product with relations */
        const productFound = await queryRunner.manager.findOne(Product, {
          where: { id: newProduct.id },
          relations: ['productFiles', 'productFiles.file'],
        });

        if (!productFound) {
          throw new BadRequestException('Product not found');
        }

        /** ✅ COMMIT */
        await queryRunner.commitTransaction();
        resolve(productFound);

      } catch (error) {
        /** ❌ ROLLBACK */
        await queryRunner.rollbackTransaction();
        reject(error);

      } finally {
        await queryRunner.release();
      }
    });
  }

  findAll() {
    return `This action returns all products`;
  }

  async findOne(id: string): Promise<Product> {
    try {
      const product: Product | null = await this.productRepository.findOne({
        where: { id },
        relations: ['productFiles', 'productFiles.file'],
      });
      if (!product) {
        throw new Error('Product not found');
      }
      return product;
    } catch (error) {
      throw error;
    }
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
