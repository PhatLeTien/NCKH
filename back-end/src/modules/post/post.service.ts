import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './entities/post.entity';
import { Category } from '../category/entities/category.entity';
import { PostDTO } from './dto/post.dto';
import { Express } from 'express';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Posts) private postRepository: Repository<Posts>,
    @InjectRepository(Category) private categoryRepository: Repository<Category>,
  ) {}

  async addPost(postDTO: PostDTO, file: Express.Multer.File): Promise<Posts> {
    const category = await this.categoryRepository.findOne({
      where: { id: postDTO.categoryId },
    });

    if (!category) {
      throw new Error('Category not found');
    }

    const newPost = this.postRepository.create({
      ...postDTO,
      category,
      image: file ? file.filename : null, // Lưu tên tệp vào cơ sở dữ liệu
    });

    return await this.postRepository.save(newPost);
  }
}
