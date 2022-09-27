import { faker } from "@faker-js/faker";

class PorductService {
  constructor() {
    this.products = [];
    this.generateProducts();
  }

  generateProducts() {
    for (let i = 0; i < 100; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        department: faker.commerce.department(),
        image: faker.image.image(640, 640),
      });
    }
  }

  find() {
    return this.products;
  }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);

    return newProduct;
  }
}

export default PorductService;
