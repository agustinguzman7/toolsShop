import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import Spinner from 'react-bootstrap/Spinner';
import { Prod } from '../productos/productos';
import { useParams } from "react-router-dom";
const ItemListContainer = ({ greeting }) => {
    const [loader, setLoader] = useState(false);
    const [productList, setProductList] = useState([]);
    const {category} = useParams()

    useEffect(() => {
        setLoader(true)
        
        Prod
            .then((res) => {
                if (category === undefined) {
                    setProductList(res)
                } else {
                    setProductList(res.filter((item)=> item.category === category))
                }
            })
            .catch((error) => console.log(error))
            .finally(() => setLoader(false))
            

    }, [category])

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