import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NftController } from './nft.controller';
import { NftService } from './nft.service';
import { Nft } from './nft.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Nft])],
  controllers: [NftController],
  providers: [NftService],
  exports: [NftService],
})
export class NftModule {}
