// src/modules/category/category.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Category])], // Sử dụng TypeOrmModule để cung cấp Category entity
  controllers: [CategoryController],
  providers: [CategoryService],
  exports: [TypeOrmModule], // Xuất TypeOrmModule để các module khác có thể sử dụng CategoryRepository
})
export class CategoryModule {}
