import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import Spinner from 'react-bootstrap/Spinner';

import { useParams } from "react-router-dom";
import { firestoreFetch } from "../components/firestoreFetch";
const ItemListContainer = ({ greeting }) => {
    const [loader, setLoader] = useState(false);
    const [productList, setProductList] = useState([]);
    const {category} = useParams()

    useEffect(() => {
        firestoreFetch(category)
            .then(result => setProductList(result))
            .catch(err => console.log(err));
    }, [category]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setProductList([]);
        })
    }, []);

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