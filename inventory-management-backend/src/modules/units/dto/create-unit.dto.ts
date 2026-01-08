import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
export class CreateUnitDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  symbol: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  abbreviation: string;
}
