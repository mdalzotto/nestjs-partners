import { HttpException, HttpStatus } from '@nestjs/common';

export class PrismaFailure extends HttpException {
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
