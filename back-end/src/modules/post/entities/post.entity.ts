// src/modules/posts/entities/post.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { Category } from 'src/modules/category/entities/category.entity';

@Entity('posts') // 'posts' là tên bảng trong cơ sở dữ liệu
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column('text')
  content: string;

  @Column({ type: 'varchar', length: 255 }) // Chuyển thành varchar với độ dài 255
  image: string;

  @Column({ type: 'boolean', default: false }) // Thêm trường is_main
  is_main: boolean;

  @ManyToOne(() => Category, category => category.posts) // Mối quan hệ nhiều bài viết thuộc về một danh mục
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
