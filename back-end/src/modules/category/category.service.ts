import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'; 
import { CategoryDTO } from './dto/category.dto';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category) private categoryRepository: Repository<Category>,
      

    ) { }

    //Thêm loại
    async addCategory(categoryDTO: CategoryDTO): Promise<Category> {
        const newCategory = this.categoryRepository.create(categoryDTO); // Tạo một đối tượng mới từ DTO
        return await this.categoryRepository.save(newCategory); // Lưu đối tượng vào cơ sở dữ liệu
    }
    
//Thêm loại

async getCategory(): Promise<Category[]> {
    return await this.categoryRepository.find();
}
}
