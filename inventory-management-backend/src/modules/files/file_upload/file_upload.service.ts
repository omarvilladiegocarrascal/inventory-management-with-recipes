import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileUpload } from './entities/file_upload.entity';
import { v2 as cloudinary } from 'cloudinary';
import { User } from 'src/modules/users/entities/user.entity';
import { Recipe } from 'src/modules/recipes/recipes/entities/recipe.entity';
import { Product } from 'src/modules/inventory/products/entities/product.entity';

@Injectable()
export class FileUploadService {
  constructor(
    @InjectRepository(FileUpload)
    private readonly fileRepo: Repository<FileUpload>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Recipe)
    private readonly recipeRepo: Repository<Recipe>,
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async identifyEntityType(id: string): Promise<{
    entity: 'user' | 'recipe' | 'product';
    object: User | Recipe | Product;
  } | null> {
    // Assuming you have repositories for User, Recipe, and Product entities
    // You need to inject these repositories in the constructor

    // Check if it's a user
    const user = await this.userRepo.findOne({ where: { id } });
    if (user) return { entity: 'user', object: user };

    // Check if it's a recipe
    const recipe = await this.recipeRepo.findOne({ where: { id } });
    if (recipe) return { entity: 'recipe', object: recipe };

    // Check if it's a product
    const product = await this.productRepo.findOne({ where: { id } });
    if (product) return { entity: 'product', object: product };

    // If not found in any entity
    return null;
  }

  async saveFile(
    file: Express.Multer.File,
    options?: { subfolder?: string; id: string },
  ): Promise<any> {
    const uploadResult = await new Promise<{
      secure_url: string;
      public_id: string;
      resource_type: string;
    }>((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: options?.subfolder,
          resource_type: 'image',
        },
        (error, result) => {
          if (error) return reject(error);
          resolve({
            secure_url: result!.secure_url,
            public_id: result!.public_id,
            resource_type: result!.resource_type,
          });
        },
      );
      stream.end(file.buffer);
    });

    // Save the file metadata to the database
    const record = this.fileRepo.create({
      originalName: file.originalname,
      filename: uploadResult.public_id,
      mimeType: file.mimetype,
      size: file.size,
      path: uploadResult.public_id,
      url: uploadResult.secure_url,
    });
    const fileSaved = await this.fileRepo.save(record);

    return fileSaved;
  }

  findAll() {
    return `This action returns all fileUpload`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileUpload`;
  }

  remove(id: number) {
    return `This action removes a #${id} fileUpload`;
  }
}
