// src/modules/users/entities/user.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,CreateDateColumn,
    UpdateDateColumn,
    
  } from 'typeorm';
  
  @Entity('users') // 'users' là tên bảng trong cơ sở dữ liệu
  export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ length: 255 })
    username: string;
  
    @Column({ length: 255 })
    email: string;
  
    @Column()
    password: string;


    @Column()
    refresh_token: string;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
   
  }
  