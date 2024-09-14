import { Controller, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'; // Import từ @nestjs/platform-express
import { PostDTO } from './dto/post.dto';
import { PostService } from './post.service';
import { Posts } from './entities/post.entity';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Post('addPost')
@UseInterceptors(FileInterceptor('image')) // 'image' là tên của trường trong form-data
async addPost(
  @Body() postDTO: PostDTO,
  @UploadedFile() file: Express.Multer.File
): Promise<Posts> {
  console.log('PostDTO:', postDTO);
  console.log('Uploaded file:', file); // Kiểm tra thông tin file

  return this.postService.addPost(postDTO, file);
}
}
