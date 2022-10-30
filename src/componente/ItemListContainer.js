import React, {useEffect, useState} from "react";
import { collection,  getDocs, getFirestore } from "firebase/firestore";
import ItemCard from "./ItemCard";
import img from "../img/cargando.gif"

const ItemListContainer = () => {
const [items, setItems] = useState([])
const [loading, setLoading] = useState([true])

useEffect(() => {
  getItems ()
}, [])

const getItems = () => {
  const db = getFirestore ()
  const collectionRef = collection( db, "Products ")
  getDocs(collectionRef).then (snapshot => {
    const data = snapshot.docs.map( e=> ({id: e.id, ...e.data()}) )
    setItems(data);
    setLoading(false)
  })
}

  return (
    <>
      { loading ?<figure> <img className="object-contain h-48 w-96"  src= {img} /> </figure>
      :
      items.map( i => <ItemCard key={i.id} {...i}/> )
      }
    </>
  );
};

export default ItemListContainer;
