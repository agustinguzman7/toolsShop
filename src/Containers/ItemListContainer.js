import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import Spinner from 'react-bootstrap/Spinner';
import { Prod } from '../productos/productos';
const ItemListContainer = ({ greeting }) => {
    const [loader, setLoader] = useState(false);
    const [productList, setProductList] = useState([]);


    useEffect(() => {
        setLoader(true)
        Prod
            .then((res) => setProductList(res))
            .catch((error) => console.log(error))
            .finally(() => setLoader(false))

    }, [])
    return (
        <>
            <h3>{greeting}</h3>
            <div className="ItemListContainer">


                {loader
                    ? <Spinner animation="border" />
                    : <ItemList productList={productList} />}

            </div>
        </>

    )
};

export default ItemListContainer;