import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { NftModule } from '../modules/nft/nft.module';

@Module({
  imports: [NftModule],
  providers: [TasksService],
})
export class TasksModule {}
