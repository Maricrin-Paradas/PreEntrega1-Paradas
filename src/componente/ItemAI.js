import React, { useEffect, useState } from 'react'
import ItemCard from "./ItemCard";
import { collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import { useParams } from 'react-router-dom';

const ItemAI = () => {
    const {tipo} = useParams()
    const [items, setItems] = useState([])

    useEffect(() => {
     if (tipo === "hilo") {
      getHilo() 
     }
     if (tipo === "aguja"){
      getAguja()
     }
    }, [tipo]);

    const getHilo = () => {
      const db = getFirestore()

      const collectionRef = query(
        collection(db, "Products "),
        where("tipo", "==", "hilo"),
      );
      getDocs(collectionRef).then ((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No resultado");
        }
        setItems(snapshot.docs.map((doc) => ({p:{ id: doc.id, ...doc.data(), quantity:0 }})));
      });
    }


    const getAguja = () => {
      const db = getFirestore()

      const collectionRef = query(
        collection(db, "Products "),
        where("tipo", "==", "aguja"),
      );
      getDocs(collectionRef).then ((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No resultado");
        }
        setItems(snapshot.docs.map((doc) => ({p:{ id: doc.id, ...doc.data(), quantity:0 }})));
      });
    }
 console.log('tipo', tipo)
 return(
    <>
    {items.map ( i => <ItemCard key={i.p.id} {...i.p}/> ) }
    </>
  )

}

export default ItemAI