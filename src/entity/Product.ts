import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('products')
export class Product {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  quatity: string;

  @Column()
  price: string;

  @CreateDateColumn({ name: 'created_at' })
  createad_At: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_At: Date;

  constructor() {
    if (!this.id) this.id = uuid();
  }
}