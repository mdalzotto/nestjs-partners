import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateSpotRequest {
  @IsNotEmpty()
  @MaxLength(255)
  name: string;
}
