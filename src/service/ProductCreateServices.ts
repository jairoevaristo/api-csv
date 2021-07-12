import { getCustomRepository, Repository } from "typeorm";

import { Product } from '../entity/Product';
import { ProductRepository } from '../repository/ProductRepository';
import { ICreateProduct } from '../dtos/createProduct';

export class ProductCreateServices {
  private productRepository: Repository<Product>;

  constructor() {
    this.productRepository = getCustomRepository(ProductRepository);
  }

  async execute({ category, name, price, quantity }: ICreateProduct): Promise<Product> {
    const product = this.productRepository.create({
      category,
      name,
      price,
      quantity
    });

    await this.productRepository.save(product);
    return product;
  }
}