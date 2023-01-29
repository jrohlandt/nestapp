import { IsNumber, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  nickname: string;

  @IsNumber()
  age: number;

  @IsString()
  breed: string;
}
