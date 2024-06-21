import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateEventRequest {
  @IsNotEmpty()
  @MaxLength(255)
  name: string;
  @IsNotEmpty()
  @MaxLength(255)
  description: string;
  @IsNotEmpty()
  @IsDateString()
  date: string;
  @IsNotEmpty()
  @Min(0)
  @IsNumber()
  price: number;
}
