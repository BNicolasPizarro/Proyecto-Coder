import React, { Children } from "react";
import UserInfo from "./UserInfo";

    function Card({message, user, buttonFunction}) {
        return(

            <div style={{border:'1px solid black', width:'400px', height:'260px'}}>
                  {message}
            <UserInfo {...user}/>
            <button onClick={buttonFunction}>Aca recibo funciones</button>

        
        </div>
        
        )
    }
    
export default Card;






/*
        state = {
            contador: 1,
        }

componentWillMount(){
    console.log("el componente se va renderizando", window)
}        

componentDidMount(){

    console.log("hola ya estoy renderizado")
    this.setState({})
}
componentDidUpdate(){
    
    if(this.state.contador < 0){
        alert("no se pueden restar numeros negativos")
    }
    console.log("hola me estoy actualizando", this.state.contador)
}
componentWillUnmount(){

}

    sumar = () =>{
        this.setState({contador : this.state.contador + 1})
    }
    restar = () =>{
        this.setState({contador : this.state.contador - 1})
        return
    }
    render(){
        return(
            <div>
                <h1>{this.props.hola}</h1>
            <button onClick={this.sumar}>Aumentar</button>
            <Contador nombre="nicolas" numero={this.state.contador} />
            <Contador numero={this.state.contador}/>
            <button onClick={this.restar}>Disminuir</button>
        </div>
        )
    }
    */

