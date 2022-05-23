import React from "react";
import ItemCount from "./ItemCount";
const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <h3>{greeting}</h3>
            <ItemCount stock="5" initial={1} onAdd/>
        </div>
    )
};

export default ItemListContainer;