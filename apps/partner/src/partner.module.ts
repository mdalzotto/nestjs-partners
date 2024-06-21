import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { SpotsModule } from './spots/spots.module';
import { PrismaModule } from '@app/core/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@app/core/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    PrismaModule,
    EventsModule,
    SpotsModule,
    AuthModule,
  ],
})
export class PartnerModule {}
