import { IsInt } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class SaveFavStoryDto {
  @ApiProperty({ example: '1' })
  @IsInt()
  storyId: number;

  @ApiProperty({ example: '1' })
  @IsInt()
  userId: number;
}
