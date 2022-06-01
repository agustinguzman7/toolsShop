import React, { useEffect, useState } from "react";
import ItemDetail from '../components/ItemDetail'
import Spinner from 'react-bootstrap/Spinner';
import { Prod } from '../productos/productos';
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
    const [loader, setLoader] = useState(false);
    const [product, setProduct] = useState([]);
    const { id } = useParams()


    useEffect(() => {
        setLoader(true)
        Prod
            .then((res) => setProduct(res.find((item) => item.id === id )))
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