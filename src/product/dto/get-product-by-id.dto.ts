import { IsString, IsUUID } from 'class-validator';

export class GetProductByIdDto {
  @IsString()
  @IsUUID()
  id: string;
}
