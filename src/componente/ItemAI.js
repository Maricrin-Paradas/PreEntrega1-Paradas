import React from 'react'
import { useParams } from 'react-router-dom'
import lista from './Products'
import ItemCard from "./ItemCard";


const ItemAI = () => {

    const {tipo} = useParams ()

    const category =  lista.filter( ( aguja ) => aguja.tipo === tipo )

  return (
    <>
    {category.map ( i => <ItemCard key={i.id} {...i}/> ) }
    </>
  )
}

export default ItemAI