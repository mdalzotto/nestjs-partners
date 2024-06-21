import { TicketKind } from '@prisma/client';
import { IsArray, IsEnum, IsNotEmpty } from 'class-validator';

export class ReserveSpotRequest {
  @IsArray()
  @IsNotEmpty()
  spots: string[]; //['A1', 'A2']
  @IsEnum(TicketKind)
  ticket_kind: TicketKind;
  email: string;
}
