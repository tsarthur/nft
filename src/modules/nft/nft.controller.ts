import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { NftService } from './nft.service';
import { NFT } from '@prisma/client';

@ApiTags('nft')
@Controller()
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @Get('nft')
  @ApiOperation({ summary: 'Получить все NFTs' })
  async getAllNfts(): Promise<NFT[]> {
    return await this.nftService.getAllNfts();
  }
}
