import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { NftModule } from './modules/nft';
import { TasksModule } from './tasks';
import { PrismaModule } from './modules/prisma';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('APP_HOST'),
        port: +configService.get<number>('APP_PORT'),
        username: configService.get<string>('POSTGRES_USER'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DATABASE'),
        autoLoadEntities: true,
        synchronize: true,
        logging: true, // TODO: логирование запросов 
      }),
      inject: [ConfigService],
    }),
    ScheduleModule.forRoot(),
    NftModule,
    TasksModule,
    PrismaModule
  ],
})
export class AppModule {}
