import React from 'react';

function Items({id, name}) {
    return(
        <div>
            <h1>{id}</h1>
            {name}
        </div>
    )
    
}
export default Items;