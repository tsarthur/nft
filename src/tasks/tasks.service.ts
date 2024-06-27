
import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { NftService } from '../modules/nft/nft.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private readonly nftService: NftService) {}

  @Cron('*/200 * * * * *')
  async handleCron() {
    this.logger.debug('Called every 200 seconds');
    try {
      await this.nftService.fetchAndUpdateNfts();
    } catch (error) {
      this.logger.error('Error in fetchAndUpdateNfts', error);
    }
  }
}
