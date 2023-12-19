import {findProductById, findProducts, insertProduct} from "./product.repository"

const getProducts = async () => {
    const products = await findProducts()
    return products
}

const getProductById = async (id: string) => {
    const product = await findProductById(id)

    if(!product) {
        throw Error("Product Not Found")
    }

    return product;
}

const createProduct = async (newProductData: any, userId: string) => {
    const product = await insertProduct(newProductData, userId)

    return product
}

export {getProducts, getProductById, createProduct}