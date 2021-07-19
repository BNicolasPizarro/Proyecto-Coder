import React from "react";

function contador(props){
    console.log("props------>", props);

    return(
        <div>
            {props.nombre}
            <h1>{props.numero}</h1>
        </div>
    )

}
export default contador;