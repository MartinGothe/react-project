import { useEffect, useState } from "react";
import { getProducts } from "../asyncMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";




export const ItemListContainer = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setIsLoading(true)
        getProducts()
            .then((resp) => {
                if (category) {
                    const productsFilter = resp.filter(product => product.category === category)
                    if (productsFilter.length > 0) {
                        setProducts(productsFilter)
                    } else {
                        setProducts(resp)
                    }
                } else {
                    setProducts(resp)
                }
                setIsLoading(false)
            })
            .catch((error) => console.log(error));
    }, [category]);

    return <>{isLoading ? <h1 className="text-center p-5 shadow p-3 mb-5 bg-body-tertiary rounded" >Cargando productos</h1> : <ItemList products={products} />}</>;
};