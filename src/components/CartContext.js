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
    const calcTotalPerItem = (id) => {
        const index = cartList.map(item => item.id).indexOf(id)
        return cartList[index].price * cartList[index].quantity
    }

    const calcItems = () => {
        let items = cartList.map(item => item.quantity);
        return items.reduce(((x, y) => x + y), 0);
    }

    const calcTotal = () => {
        return calcSubtotal() + calcTaxes();
    }

    const calcSubtotal = () => {
        const subtotal = cartList.map(item => calcTotalPerItem(item.id))
        return subtotal.reduce(((x,y) => x + y), 0);
    }

    const calcTaxes = () => {
        return calcSubtotal() * 0.21;
    }


    return(
        <CartContext.Provider value={{cartList, addToCart, removeItem, deleteCart, calcTotalPerItem, calcItems, calcTotal, calcSubtotal, calcTaxes}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;