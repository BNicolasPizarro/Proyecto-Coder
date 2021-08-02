import React, {useContext} from'react'
import ItemCount from './ItemCount'
import {CartContext} from './CartContext';

function ItemDetail({detailCont}){
    const {Boton, setBoton, AddToCart} = useContext(CartContext); 




    const onAdd= (contador)=>{
        alert(`El numero de items que tiene en el carrito es:  ${contador}` )
        setBoton(true)
        AddToCart(detailCont, contador)
    }
  
    return (
        <div>
                 
                 {detailCont.title}
                 {detailCont.description}
                 <img  alt=""src={detailCont.image} />
                 <br></br>
                 { Boton === false ? (
                  <ItemCount onAdd={onAdd} stock={detailCont.stock} initial={1}/>
                  ) : ({})}
                    <button onClick={()=>({})}>Termina tu compra</button>
                  

                {console.log(detailCont)}
         </div>

    )}
export default ItemDetail;