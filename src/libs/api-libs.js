export const getProductData = async() => {
    const response = await fetch ('http://localhost:3000/api/')
    const products = await response.json()
    return products
}