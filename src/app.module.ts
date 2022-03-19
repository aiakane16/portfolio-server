import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

import config from './config/keys';

@Module({
  imports: [ItemsModule, ProductsModule, MongooseModule.forRoot(config.mongoDBURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
