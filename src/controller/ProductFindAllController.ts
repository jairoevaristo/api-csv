import { Request, Response } from 'express';

import { ProductFindAllServices } from '../service/ProductFindAllServices';
import { ICreateProduct } from '../dtos/createProduct';

export class ProductFindAllController {
  async handle(req: Request, res: Response) {
    const productService = new ProductFindAllServices();
    const products = await productService.execute();
    
    return res.json(products);
  }
}
