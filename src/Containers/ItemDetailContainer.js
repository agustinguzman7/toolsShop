import React, { useEffect, useState } from "react";
import ItemDetail from '../components/ItemDetail'
import Spinner from 'react-bootstrap/Spinner';
import { Prod } from '../productos/productos';
import { useParams } from "react-router-dom";
import { firestoreFetchOne } from "../components/firestoreFetch";
const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState([]);
    const {id} = useParams()


    useEffect(() => {
        firestoreFetchOne(id)
            .then(result => setProduct(result))
            .catch(err => console.log(err));
    }, [id]);
    return (
        <>
            
            <div className="ItemListContainer">


                <ItemDetail product={product} />}

            </div>
        </>

    )
};

export default ItemDetailContainer;