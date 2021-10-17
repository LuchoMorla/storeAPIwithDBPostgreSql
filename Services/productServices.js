const faker = require('faker');

class ProductsService {

    constructor() {
        this.products = [];
        //Vamos a decir que cada vez que corra una instancia del servicio, va a empezar y generar los productos:
        this.generate();
    }
    // será el metodo para generar con la datafake
    generate() {
        const limit = 100; //size || 10;
        for (let index = 0; index < limit; index++) {
            this.products.push({
                id: faker.datatype.uuid(),
                name: faker.commerce.productName(),
                price: parseInt(faker.commerce.price(), 10),
                image: faker.image.imageUrl(),
            });
        }
    }

    async create(data) {
        const newProduct = {
            id: faker.datatype.uuid(),
            ...data
        }
        this.products.push(newProduct);
        return newProduct;
    }

    async find() {
        return this.products;
    }

    async findOne(id) {
        return this.products.find(item => item.id === id);
    }

    async update(id, changes) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('product not found');
        }
        const product = this.products[index];
        this.products[index] = {
            ...product,
            ...changes
        };
        return this.products[index];
    }

    async delete(id) {
        const index = this.products.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error('product not found');
        }
        this.products.splice(index, 1);
        return {message: true, id}
    }
}
module.exports = ProductsService;