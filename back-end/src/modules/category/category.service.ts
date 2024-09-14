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
    async addCategory(categoryDTO:CategoryDTO):Promise<Category>{
    return await this.categoryRepository.save({
        ...categoryDTO
    })
}
//Thêm loại

async getCategory(): Promise<Category[]> {
    return await this.categoryRepository.find();
}
}
