// src/modules/categories/entities/category.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
  } from 'typeorm';
import { Posts } from 'src/modules/post/entities/post.entity';
  
  @Entity('categories') // 'categories' là tên bảng trong cơ sở dữ liệu
  export class Category {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 255 })
    name: string;
  
  
    @OneToMany(() => Posts, post => post.category) // Một danh mục có thể có nhiều bài viết
    posts: Posts[];
  
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
  }
  