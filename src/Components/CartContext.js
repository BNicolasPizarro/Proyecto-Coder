import { createContext, useState } from 'react'

export const CartContext = createContext()

export default function CartContenido({children}){
    const [Boton, setBoton] = useState(false)
    const [cart, setCart] = useState([]);

    const  isInCart=(id)=> {
        return cart.find((element) => element.detailCont.id === id)
        }

    const AddToCart = (detailCont, contador) =>{
        isInCart(detailCont.id) ? alert("Este producto ya esta en el carrito") : setCart([...cart, {detailCont, contador}])
    }
    const Reducer = cart.reduce(
        (acc, curr) =>{
            return acc + curr.detailCont.price * curr.contador;
        },
        0        
    )
    const Clear = () =>{
        return (setCart([]))
    }
   
    const RemoveItem = (id) =>{
        const newCart = cart.filter((detailCont)=> detailCont.detailCont.id !== id);
        setCart(newCart)
    }
    return (
        
        <CartContext.Provider value={{Boton, setBoton, cart, setCart, AddToCart, Clear, RemoveItem, Reducer}}>
            {children}
        </CartContext.Provider>
        )
}