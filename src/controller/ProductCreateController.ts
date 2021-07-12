import { Request, Response } from 'express';
import { Readable } from 'stream';
import readline from 'readline';

import { ProductCreateServices } from '../service/ProductCreateServices';
import { ICreateProduct } from '../dtos/createProduct';

export class ProductCreateController {
  async handle(req: Request, res: Response) {
    const { file } = req;
    const product: ICreateProduct[] = [];
    const productService = new ProductCreateServices();

    const readableProduct = new Readable();
    
    readableProduct.push(file?.buffer);
    readableProduct.push(null);

    const productLine = readline.createInterface({
      input: readableProduct
    });

    for await(let line of productLine) {
      const productDataLine = line.split(',');
      product.push({
        name: productDataLine[0],
        category: productDataLine[1],
        quantity: Number(productDataLine[2]),
        price: Number(productDataLine[3]),
      })
    }

    for await(let line of product) {
      productService.execute(line);
    }

    return res.json(product);
  }
}
