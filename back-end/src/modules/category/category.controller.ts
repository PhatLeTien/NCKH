
import { Body, Post, Get, Controller } from '@nestjs/common';
import { CategoryDTO } from './dto/category.dto';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';

@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService){}

    @Post('addCategory')
    //Lấy dữ liệu từ yêu cầu HTTP và ánh xạ nó vào đối tượng RegisterUserDTO.
    addCategory(@Body() categoryDTO:CategoryDTO):Promise<Category>{
    
        console.log(categoryDTO)
        //Gọi phương thức register của AuthService để thực hiện logic đăng ký và trả về đối tượng User.
        return this.categoryService.addCategory(categoryDTO);
    };


@Get('getCategory')
async getCategory(): Promise<Category[]> {
    // Gọi service để lấy danh sách loại sản phẩm
    return await this.categoryService.getCategory();
}


    
}
 