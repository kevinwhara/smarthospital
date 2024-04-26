export const getProductData = async() => {
    const response = await fetch('/api/product/')
    const products = await response.json()
    return products
}