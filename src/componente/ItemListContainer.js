import React, {useEffect, useState} from "react";
import ItemCard from "./ItemCard";
import lista from "./Products";

const ItemListContainer = () => {

const [items, setItems] = useState([])

useEffect(() => {
  getProducts().then (response => {
    console.log(response);
    setItems( response)
  })
}, [])

const getProducts = () => {
  return new Promise ( resolve => {
    setTimeout (() => {
      resolve ( lista ) 
    }, 1000);
  })
}

  return (
    <>
      <div className="card-title m-5 " >Catalogo</div>
      {items.map ( i => <ItemCard key={i.id} {...i}/> ) }
    </>
  );
};

export default ItemListContainer;
