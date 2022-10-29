import React from 'react'
import { Link } from 'react-router-dom';

const ItemCard= ({id, name, price, stock, img}) => {
  return (
    <Link to={`/item/${id}`}>
    <div className="inline-block m-5">
      <div className="card h-80 w-80 bg-base-190 shadow-xl m-5 ">
        <figure> <img className="bject-contain h-48 w-96" src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title"> {name}</h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Precio {price}</div>
            <div className="badge badge-outline">Stock {stock}</div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default ItemCard