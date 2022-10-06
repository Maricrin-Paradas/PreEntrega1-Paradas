import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import lista from './Products'

const ItemDetail = () => {

    const {id:itemId } = useParams()
    const [item, setItems] = useState ({})

    useEffect(() => {
        getItemDetil().then (response =>{
            setItems (response)
        })
    }, [])

    const getItemDetil = () => {
        return new Promise((resolve) => {
                resolve( lista.find ( l => l.id == itemId ) )
      })
    }

  return (
    <>
      <div className="flex justify-center">
      <div className="card w-96 bg-base-190 shadow-xl m-5 ">
        <figure> <img src={item.img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title"> {item.name}</h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Precio {item.price}</div>
            <div className="badge badge-outline">Stock {item.stock}</div>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default ItemDetail