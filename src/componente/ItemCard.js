import React from 'react'
import { Link } from 'react-router-dom';

const ItemCard= ({id, name, price, stock, img}) => {
  return (
    <div className=" inline-block ">
    <Link to={`/item/${id}`}>
      <div className="card w-80 bg-base-190 shadow-xl m-5 ">
        <figure> <img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title"> {name}</h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Precio {price}</div>
            <div className="badge badge-outline">Stock {stock}</div>
          </div>
        </div>
      </div>
    </Link>
    </div>
  )
}

export default ItemCard