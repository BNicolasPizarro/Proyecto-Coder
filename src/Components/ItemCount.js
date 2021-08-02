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
    const clear = () => {
        setContador(inital)
    }
    return(
        <span>
            <h1>stock total: {stock}</h1>
            <h1>stock disponible: {stock - contador} </h1>
            <button onClick={agregar} >agregar</button>
            <br />
            <span>{contador}</span>
            <br />
            <button onClick={restar}>restar</button>
            <br />
            <button onClick={clear}>reset</button>
            <br />
            <button onClick={()=> onAdd(contador)}>Agregar contenido</button>
        </span>
    )
}
export default ItemCount;