import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);
    
    const addToCart = (item, cantidad) => {

        const check = cartList.find(el => el.id === item.id)

        const encontrarDuplicado = (check,cartList) => {
            cartList.forEach(element => {
                if(check.id === element.id) {
                    return element.quantity += cantidad
                }
            });
        }
        
        if (check) {
            encontrarDuplicado (check, cartList)
        }
        else {
            item.quantity = cantidad
            setCartList([...cartList,item])
        }
    }

    const removeItem = (id) => {
        const filteredArray = cartList.filter( item => item.id !== id );
        setCartList(filteredArray)
    }

    const deleteCart = () => {
        setCartList([]);
    }


    return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, deleteCart}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;