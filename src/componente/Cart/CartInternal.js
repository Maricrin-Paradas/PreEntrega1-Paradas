import { useCart } from "../contex/ContexCar";
import { Link } from 'react-router-dom';

const CartInternal = () => {
  const { products, clearCart } = useCart();

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
            <Link to='/cart/page'>   <button className="btn btn-secondary">Pagar</button> </Link>
                <button onClick={clearCart} className="btn btn-secondary">Limpiar Carrito</button>
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
