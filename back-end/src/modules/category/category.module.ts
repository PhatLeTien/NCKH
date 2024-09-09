import { Module } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './category.service';



@Module({
    imports:[
        TypeOrmModule.forFeature([Category]), // Cung cấp repository cho entity User
    ],
    controllers:[CategoryController],
    providers: [CategoryService]
})
export class CategoryModule {}
