import React, { useState } from 'react';

function ItemCount({inital, stock, onAdd}) {
    const [contador, setContador] = useState (inital)
    const agregar =()=>{
        if (contador<stock){
            setContador(contador + 1)
        }
    }
    const restar =()=>{
        if(contador> inital){
            setContador(contador - 1)
        }
    }
    return(
        <span>
            <h3>stock total: {stock}</h3>
            <h3>stock en deposito {stock-contador}</h3>
            <button onClick={agregar}>sumar</button>
            <h1>{contador}</h1>
            <button onClick={restar}>restar</button>
            <br/>
            <button onClick={()=> onAdd(contador)}>agregar al carrito</button>
        </span>
    )
}
export default ItemCount;