import React, { useEffect, useState } from "react";
import ItemDetail from '../components/ItemDetail'
import Spinner from 'react-bootstrap/Spinner';
import { Prod } from '../productos/productos';
const ItemDetailContainer = () => {
    const [loader, setLoader] = useState(false);
    const [product, setProduct] = useState([]);


    useEffect(() => {
        setLoader(true)
        Prod
            .then((res) => setProduct(res[0]))
            .catch((error) => console.log(error))
            .finally(() => setLoader(false))

    }, [])
    return (
        <>
            
            <div className="ItemListContainer">


                {loader
                    ? <Spinner animation="border" />
                    : <ItemDetail product={product} />}

            </div>
        </>

    )
};

export default ItemDetailContainer;