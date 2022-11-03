import React from 'react'
import { useCart } from '../Contex/ContexCar'
import {Link } from 'react-router-dom'

const CartWidget = () => {

  const {products} = useCart()

  return (
    <>
      <div className="dropdown dropdown-hover dropdown-left">
        <label tabIndex={0} className="btn btn-ghost btn-circle m-2">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item">{products.length}</span>
          </div>
             <ul tabIndex={0} className="dropdown-content menu  p-2 shadow bg-base-100 rounded-box w-52">
             {products.map( (data) => {
              return (
                <li className=' bg-violet-400'><a>{data.name} {data.price}</a></li>  )  }) }
            { products.length === 0 ?
         <li>
              <div tabIndex={0} className="mt-3  bg-violet-400  w-50 bg-base-100 shadow">
                <div className="card-body">
                  <div className="card-actions">
                    <div> 
                    Carrito vacio</div>
                  </div>
                </div>
              </div>
              </li>
              :
              <li>
              <div tabIndex={0} className="mt-3 card card-compact  bg-violet-400 w-50 bg-base-100 shadow">
                <div className="card-body">
                  <div className="card-actions z-100">
                   <Link to='/cart/internal'> <button className="btn btn-secondary btn-block">
                    Finalizar compra</button> </Link>
                  </div>
                </div>
              </div>
              </li>
              }
              </ul>
        </label>
      </div>
    </>
    )
}

export default CartWidget