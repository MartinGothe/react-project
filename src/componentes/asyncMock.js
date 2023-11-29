const products = [
    { id: "1", name: "ARGENTINA 1986", img: "../../public/assets/img/argentina-1986.jpg", price: 35000, category: "remeras", description: "Remera retro Argentina", stock: 3 },
    { id: "2", name: "BRASIL 1970", img: "../../public/assets/img/brasil-1970.jpg", price: 25000, category: "remeras", description: "Remera retro Brasil", stock: 1 },
    { id: "3", name: "ALEMANIA 1972", img: "../../public/assets/img/deutschland-1972.jpg", price: 25000, category: "remeras", description: "Remera retro Alemania", stock: 5 },
    { id: "4", name: "HOLANDA 1978", img: "../../public/assets/img/nederland-1978.jpg", price: 20000, category: "remeras", description: "Remera retro Holanda", stock: 10 },
    { id: "5", name: "ADIDAS ABSOLUTE", img: "../../public/assets/img/AdidasAbsolute.webp", price: 25000, category: "botines", description: "Botin retro", stock: 15 },
    { id: "6", name: "NIKE TIEMPO", img: "../../public/assets/img/NikeTiempo.webp", price: 18000, category: "botines", description: "Botin retro", stock: 10 },
    { id: "7", name: "TOTAL 90", img: "../../public/assets/img/total90.webp", price: 17000, category: "botines", description: "Botin retro", stock: 12 },
    { id: "9", name: "PUMA FUTURE", img: "../../public/assets/img/pUMA_future.avif", price: 21500, category: "botines", description: "Botin retro", stock: 22 },
];

export const getProducts = () => {

    return new Promise((resolve, reject) => {
        if (products.length > 0) {
            setTimeout(() => {
                resolve(products)
            }, 2000);
        } else {
            reject("no hay productos")
        }
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {

        if (products.length > 0) {
            const product = products.find(product => product.id === id)

            setTimeout(() => {
                if (!product) {
                    reject(`Disculpa, no se encuentra el producto ${id}`)
                }
                resolve(product)
            }, 1000)
        } else {
            reject("Nos quedamos sin productos :(")
        }
    })

}