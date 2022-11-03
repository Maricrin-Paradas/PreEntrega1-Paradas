import { useCart } from "../Contex/ContexCar";
import { Link } from 'react-router-dom';

const CartInternal = () => {
  const { products, claerCart, conunt} = useCart();

  const addHandler = () => { 
    claerCart()
  }


  console.log('products', products)
  return (
    <>
    {
        products.length !== 0 ?
        products.map( (data) => {
            return (
          <div className="card lg:card-side bg-base-200 shadow-xl m-20">
            <figure>
              <img className="h-55 w-96" src={data.img} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title"> {data.name} </h2>
              <p>${data.price}</p>
              <span className= "p-3 " >Cantidad {data.amount}</span>
              <div className="card-actions justify-end">
            <Link to='/cart/page'>   <button className="btn btn-secondary">Pagar</button> </Link>
              </div>
            </div>
          </div>
            )
          } )
          :
          <p> No hay producto</p>
        }
        <div className="flex justify-end"> 
        <button onClick={addHandler} className="btn btn-secondary m-5">Limpiar Carrito</button>
        </div>

    </>
  );
};

export default CartInternal;
