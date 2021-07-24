import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer(){

    const [detailCont, setDetailCont] = useState ({});

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character/1',{
            method:'GET'
        }).then(res => res.json())
        .then((data)=>setDetailCont(data))
        
    })
    return (
        <div>
            <ItemDetail image={detailCont.image} name={detailCont.name}/>
        </div>
    )
}
export default ItemDetailContainer;