import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import img from "../img/cargando.gif"
import { useCart } from './contex/ContexCar';

const ItemDetail = () => {

    const { id } = useParams()
    const [items, setItems] = useState({})
    const [loading, setLoading] = useState([true])
    const { addToCart } = useCart()

    useEffect(() => {
      getItemsDetail()
    }, [])

   const getItemsDetail = () => {
      const db = getFirestore()
      const collectionRef = collection( db, "Products ")
      const docRef = doc( collectionRef, id)
      getDoc(docRef).then(res  => {
      setItems(res.data());
      setLoading(false)
      })
    }

    const addHandler = () => { 
      addToCart(items)
    }

  return (
          <>{ loading ?<figure> <img className="object-contain h-48 w-96"  src= {img} /> </figure>
          :
           <div ClassName="flex justify-center "> 
    <div className=" card w-100 bg-base-100 shadow-xl">
        <figure><img className="h-55 w-96" src={items.img}/></figure>
        <div className="card-body">
            <h2 className="card-title">{items.name}</h2>
            <p>{items.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Precio {items.price}</div>
              <div className="badge badge-outline">Stock {items.stock}</div>
              <button onClick={addHandler} className="btn btn-primary">Agregar a Carrito</button>
            </div>
        </div>
    </div>
    </div>
}
  </>
  )
}

export default ItemDetail