import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm'; 
import { CategoryDTO } from './dto/category.dto';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category) private userRepository: Repository<Category>,
      

    ) { }

    //Thêm loại
    async addCategory(categoryDTO:CategoryDTO):Promise<Category>{
    return await this.userRepository.save({
        ...categoryDTO
    })
}
}
