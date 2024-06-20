import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Delete,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateCatDto } from './dto/create-cat-dto';
import { UpdateCatDto } from './dto/update-cat-dto';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Res() res: Response) {
    res.status(HttpStatus.OK).json([
      {
        status: HttpStatus.OK,
        Data: [
          {
            message: 'This action returns all cats',
          },
        ],
      },
    ]);
  }
  @Get(':id')
  findOneById(@Param('id') id: string, @Res() res: Response) {
    res.status(HttpStatus.OK).json([
      {
        status: HttpStatus.OK,
        Data: [
          {
            message: `This action returns a #${id} cat`,
          },
        ],
      },
    ]);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createCatDto: CreateCatDto) {
    console.log('Create CatDto:', createCatDto);
    return 'This action creates a new cat';
  }

  @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    console.log('Update CatDto:', updateCatDto);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    console.log('Delete Cat with ID:', id);
    return `This action removes a #${id} cat`;
  }
}
