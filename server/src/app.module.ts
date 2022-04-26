import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MadeCController } from './made-c/made-c.controller';
import { MadeCrudModule } from './made-crud/made-crud.module';

@Module({
  imports: [MadeCrudModule],
  controllers: [AppController, MadeCController],
  providers: [AppService],
})
export class AppModule {}
