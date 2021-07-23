import React, { useEffect, useState } from 'react';

function ItemDetailContainer(){

    const [detailCont, setDetailCont] = useState ([]);

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character',{
            method:'GET'
        }).then(res => res.json())
        .then((data)=> setDetailCont(data.results))
    })
    return (
        <div>
            {detailCont.image}
        </div>
    )
}
export default ItemDetailContainer;