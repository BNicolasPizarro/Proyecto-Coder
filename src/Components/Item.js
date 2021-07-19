import React from 'react';

function Items({id, destacado, nombre}) {
    return(
        <div>
            <h1>{id}</h1>
            <p>{destacado}</p>
            {nombre}
        </div>
    )
    
}
export default Items;