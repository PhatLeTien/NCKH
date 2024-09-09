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
  export class Post {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 255 })
    title: string;
  
    @Column('text')
    content: string;

    @Column('text')
    image: string;
  
    @ManyToOne(() => Category, category => category.posts) // Mối quan hệ nhiều bài viết thuộc về một danh mục
    @JoinColumn({ name: 'categoryId' })
    category: Category;
  
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
  }
  