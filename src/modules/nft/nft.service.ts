import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient, NFT } from '@prisma/client';
import axios from 'axios';

@Injectable()
export class NftService {
  private readonly tonApiUrl: string;
  private readonly prisma: PrismaClient;

  constructor(
    private configService: ConfigService,
  ) {
    this.tonApiUrl = this.configService.get<string>('TONAPI_URL');
    this.prisma = new PrismaClient();
  }

  async fetchAndUpdateNfts(): Promise<void> {
    const response = await axios.get(this.tonApiUrl);
    const nfts = response.data.nft_items;

    for (const nftData of nfts) {
      await this.prisma.nFT.upsert({
        where: { address: nftData.address },
        update: {
          name: nftData.metadata.name,
          description: nftData.metadata.description,
          image: nftData.metadata.image,
          owner: nftData.owner.address,
          updatedAt: new Date(),
        },
        create: {
          address: nftData.address,
          name: nftData.metadata.name,
          description: nftData.metadata.description,
          image: nftData.metadata.image,
          owner: nftData.owner.address,
          updatedAt: new Date(),
        },
      });
    }
  }

  async getAllNfts(): Promise<NFT[]> {
    return this.prisma.nFT.findMany();
  }
}
