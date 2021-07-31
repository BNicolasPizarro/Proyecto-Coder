import React from "react"
import ItemList from "./ItemList"
import ItemCount from './ItemCount'


function ItemSum(props){
    const onAdd = (contador) => {
        if(contador==0){
            alert('el carrito esta vacio')
        }
        else{
            alert(`El numero de items que tiene en el carrito es:  ${contador}` )
        }
        }
        return(
            <div>
                {props.title} {props.name}

                <ItemCount inital ={0} stock={5} onAdd={onAdd}/> 
            </div>
        )
    }


export default ItemSum;