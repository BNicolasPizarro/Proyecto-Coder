import React from'react'
import ItemCount from './ItemCount'

function ItemDetail(detailCont){
    const onAdd= (contador)=>{
        alert(`El numero de items que tiene en el carrito es:  ${contador}` )
    }
  
    return (
        <div>
                 
                 {detailCont.title}
                 {detailCont.description}
                 <img  alt=""src={detailCont.image} />
                 <br></br>
                    <button onClick={()=>({})}>Termina tu compra</button>
                  

                {console.log(detailCont)}
         </div>

    )}
export default ItemDetail;