class ProductManager {

    constructor() {
        this.products = []

    }

    addProduct = (producto) => {

        if (producto.title === undefined || producto.description === undefined ||
            producto.price === undefined || producto.thumbnail === undefined ||
            producto.code === undefined || producto.stock === undefined) { return }

        if (this.products.find(x => x.code === producto.code) !== undefined)
            return

        producto.id = this.products.length


        this.products.push(producto)
    }
    getProducts = () => {
        return this.products
    }

    getProductById = (id) => {
        let elemento = this.products.find(y => y.id === id)
        if (elemento !== undefined)
            return elemento
        else
            console.log('Not found')


    }
}

class product {
    constructor(title, description, price, thumbnail, code, stock) {

        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock

    }

}

let proManager = new ProductManager();
let pro1 = new product('pantalon', 'jean', 1500, 'https://static2.degriffstock.com/99829-thickbox/pantalon-jeans.jpg', 'pant86', 2);
proManager.addProduct(pro1);