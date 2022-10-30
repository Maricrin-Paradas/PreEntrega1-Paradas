import React, { useState } from "react";
import { useCart } from "../contex/ContexCar";

const CartInternal = () => {
  const { products, clearCart } = useCart();
  //const [data, setData] = useState([])

  //const datos = products.map( e=> ({id: e.id, ...e.data()}) )
 // setData(datos)

  return (
    <>
    {
        products.length !== 0 ?
        products.map( (data) => {
            return (
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img src={data.img} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> {data.name} </h2>
              <p>{data.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Pagar</button>
                <button onClick={clearCart} className="btn btn-primary">Limpiar Carrito</button>
              </div>
            </div>
          </div>
            )
        } )
        :
        <p> No hay producto</p>
    }
    </>
  );
};

export default CartInternal;
