
import React from "react";




const ItemCount = ({ stock, initial, onAdd, Cantidad, setCantidad}) => {
    
    
    const SumarCantidad = () => {
        if (Cantidad < stock) {
            setCantidad(Cantidad + 1)
        }
    }
    const RestarCantidad = () => {
        if (Cantidad > initial) {
            setCantidad(Cantidad - 1)   
        }
        
    }
    
    
    
    return (
        <>
            <div className="container">

            <button type="button" className="btn btn-light" onClick={SumarCantidad}>+</button>
            <span >{Cantidad}</span>
        
            <button type="button" className="btn btn-light" onClick={RestarCantidad}>-</button>

            <button type="button" className="btn btn-primary" onClick={ () => onAdd(Cantidad)}>Agregar al Carrito</button>

            </div>
        </>
    )
}

export default ItemCount