import react, {useEffect,useState} from 'react';
import Items from './Item';
import ItemCount from './ItemCount';
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
          <Items id={component.id} name={component.nombre}/>)}
      </div>
    )
        
    
}
export default ItemList;

/*function ItemlistContainer(props){
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


export default ItemlistContainer;*/