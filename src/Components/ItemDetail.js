import React from'react'

function ItemDetail(detailCont){
    return (
        <div>
            <img src={detailCont.image}/>
            <h1>{detailCont.name}</h1>
        </div>
    )
}
export default ItemDetail;