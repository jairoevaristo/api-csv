import { getCustomRepository, Repository } from "typeorm";

import { Product } from '../entity/Product';
import { ProductRepository } from '../repository/ProductRepository';

export class ProductFindAllServices {
  private productRepository: Repository<Product>;

  constructor() {
    this.productRepository = getCustomRepository(ProductRepository);
  }

  async execute(): Promise<Product[]> {
    const product = await this.productRepository.find();
    return product;
  }
}