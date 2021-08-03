import React,{useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { CartContext } from './CartContext'
import { getFirestore } from '../firebase/firebase-index'

export default function ItemDetailContainer() {
    const [detail, setDetail] = useState([])
    const { id } = useParams();
    const {setBoton} = useContext(CartContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const db = getFirestore();
        const itemCollection = db.collection("items")
        .where("id", "==", id)
        return itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0){
                console.log('no results')
            } else {
                setDetail(querySnapshot.docs.map(doc => doc.data())[0]) 
                
            }
        }).catch(error => {
            console.log('error ->', error)
        }).finally(()=>{setLoading(false)})
       
     }, [id])

 return(
     <>
     <h1>Producto: </h1>
    
       <ItemDetail item={detail}/>
     </>
 )
}