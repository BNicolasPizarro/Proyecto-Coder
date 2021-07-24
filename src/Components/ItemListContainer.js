import react, {useEffect,useState} from 'react';
import ItemList  from './ItemList';
import Items from './Item'
import ItemDetail from './ItemDetail'

const ItemListContainer =()=>{
    const [Item, setItem] = useState([]);

    useEffect(()=>{
        new Promise ((resolve, reject)=>{
            setTimeout(resolve(ItemList),2000)
        }).then((NewItem)=>{
            setItem(NewItem)
        })
    })

    return(
      <div>
          {Item.map((component)=>
          <Items id={component.id} name={component.nombre}/>)}
          <ItemDetail/>
      </div>
    )
        
    
}
export default ItemListContainer;

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