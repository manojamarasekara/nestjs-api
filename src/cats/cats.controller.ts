import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Delete,
  Res,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateCatDto } from './dto/create-cat-dto';
import { UpdateCatDto } from './dto/update-cat-dto';

/**Ask question about the Httpcode */
@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Res({ passthrough: true }) res: Response) {
    try {
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
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: 'Something went wrong fetching all cats',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }
  @Get(':id')
  findOneById(@Param('id') id: string, @Res() res: Response) {
    try {
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
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: `Something went wrong fetching #${id} cat`,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
    try {
      res.status(HttpStatus.CREATED).json([
        {
          status: HttpStatus.CREATED,
          Data: [
            {
              message: `This action creates a new cat`,
              details: createCatDto,
            },
          ],
        },
      ]);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: `Something went wrong creating a new cat`,
          payload: createCatDto,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCatDto: UpdateCatDto,
    @Res() res: Response,
  ) {
    try {
      res.status(HttpStatus.ACCEPTED).json([
        {
          status: HttpStatus.ACCEPTED,
          Data: [
            {
              message: `This action updates a #${id} cat`,
              details: updateCatDto,
            },
          ],
        },
      ]);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: `Something went wrong updating #${id} cat`,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    try {
      res.status(HttpStatus.NO_CONTENT).json([
        {
          status: HttpStatus.NO_CONTENT,
          Data: [
            {
              message: `This action delete a #${id} cat`,
            },
          ],
        },
      ]);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: `Something went wrong deleting #${id} cat`,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }
}
