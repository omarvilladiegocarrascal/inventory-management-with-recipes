import { IsString, IsOptional, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateRecipeDto {
  @ApiProperty({ description: 'Name of the recipe', maxLength: 200 })
  @IsString()
  @MaxLength(200)
  name: string;

  @ApiProperty({
    description: 'Description of the recipe',
    required: false,
    maxLength: 400,
  })
  @IsString()
  @IsOptional()
  @MaxLength(400)
  description?: string;
}
