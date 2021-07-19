import react from 'react';
import Items from './Item';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

function ItemlistContainer(props){
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
                <ItemList/>

                <ItemCount inital ={0} stock={5} onAdd={onAdd}/> 
            </div>
        )
    }


export default ItemlistContainer;