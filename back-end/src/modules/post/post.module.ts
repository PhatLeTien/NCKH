import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
 import { Posts } from './entities/post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from '../category/category.module'; 
import { multerConfig } from 'src/config/multer.config'; 
import { MulterModule } from '@nestjs/platform-express';
@Module({
  
  imports:[
    TypeOrmModule.forFeature([Posts]), // Cung cấp repository cho entity User
    CategoryModule, // Thêm CategoryModule để sử dụng CategoryRepository
    MulterModule.register(multerConfig), // Sử dụng cấu hình Multer
],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
