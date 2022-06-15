import React, { useEffect, useState } from "react";
import ItemDetail from '../components/ItemDetail'
import Spinner from 'react-bootstrap/Spinner';
import { Prod } from '../productos/productos';
import { useParams } from "react-router-dom";
import { firestoreFetchOne } from "../components/firestoreFetch";

import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState([]);
    const {id} = useParams()


    useEffect(() => {

        const db = getFirestore();
    
        const productRef = doc(db, "productList", id);
    
        getDoc(productRef)
    
          .then((doc) => setProduct({ id: doc.id, ...doc.data() }))
    
          .catch(error=> console.log(error))
    
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