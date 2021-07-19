import React, {useState, useEffect, Component } from "react";
import Items from "./Item";

const promesa =()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>
    resolve([
        {id: 29, destacado: true, nombre:'mango'},
        {id: 28, destacado: true, nombre:'pera'},
        {id: 27, destacado: true, nombre:'limon'},
        {id: 56, destacado: false, nombre:'banana'}
    ]), 2000
    )
    })
    
}

const ItemList =()=>{
    const[itemList, setItemList] = useState([])
    
    const ejecutarPromesa =()=>{
        promesa().then((data)=>{
            setItemList(data)
        })
    }
    useEffect(()=>{
        ejecutarPromesa();
    },[])
    return(
      <div>
          {itemList.map((component)=>
          <Items id={component.id} nombre={component.nombre}/>)}
      </div>
    )
        
    
}
export default ItemList;