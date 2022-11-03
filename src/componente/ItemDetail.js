import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";
import img from "../img/cargando.gif"
import { useCart } from './Contex/ContexCar';

const ItemDetail = () => {

    const { id } = useParams()
    const [items, setItems] = useState({})
    const [loading, setLoading] = useState([true])
    const [conunt, setConunt] = useState(1)
    const { addToCart } = useCart()

    useEffect(() => {
      getItemsDetail()
    }, [])

   const getItemsDetail = () => {
      const db = getFirestore()
      const collectionRef = collection( db, "Products ")
      const docRef = doc( collectionRef, id)
      getDoc(docRef).then(res  => {
      setItems(res.data())
      setLoading(false)
      })
    }

    const addHandler = () => { 
      addToCart(items, conunt)
    }

    const decrease = () => {
      setConunt(conunt - 1)
    }

    const increase = () => {
      setConunt(conunt + 1)
    }


  return (
          <>{ loading ?<figure> <img className="object-contain h-48 w-96"  src= {img} /> </figure>
          :
           <div ClassName="flex justify-center "> 
    <div className=" card lg:card-side bg-base-200 shadow-xl m-20">
        <figure><img className="h-55 w-96" src={items.img}/></figure>
        <div className="card-body m-10">
            <h2 className="card-title">{items.name}</h2>
            <p>{items.description}</p>
            <div className="card-actions justify-end">
              <div className="  p-3 m-5 ">Precio ${items.price}</div>

              <div className="btn-group m-5"> 
              <button disabled={ conunt <= 1 } onClick={decrease} className="btn btn-secondary">-</button>
              <span className= "p-3 " >{conunt}</span>
              <button className=" w-5 btn btn-secondary" disabled={ conunt >= items.stock}  onClick={increase} >+</button>
              </div>
               <button onClick={addHandler} className="btn btn-secondary m-5">Agregar a Carrito</button>
            </div>
        </div>
    </div>
    </div>
}
  </>
  )
}

export default ItemDetail