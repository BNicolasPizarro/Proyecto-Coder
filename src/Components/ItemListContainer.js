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

