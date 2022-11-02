import { useCart } from "../Contex/ContexCar";
import { Link } from "react-router-dom";

const CartInternal = () => {
  const { products, removeProduct } = useCart();

  console.log('products cardinternal', products)
  return (
    <>
      {products.length !== 0 && products.quantity && Array.isArray(products) ?
         (
          products?.map((data) => {
          return (
            <div className="card lg:card-side bg-base-200 shadow-xl m-20" key={data.p?.id}>
              <figure>
                <img className="h-55 w-96" src={data.p?.img} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title"> {data.p?.name} </h2>
                <p>${data.p?.price}</p>
                <div className="card-actions justify-end">
                  <p> Cantidad: {data.p.quantity}</p>
                  <p> Subtotal: {data.p.quantity * data.p?.price} </p>
                  <button
                    onClick={() => removeProduct()}
                    className="btn btn-secondary "
                  >
                    Eliminar
                  </button>
                  <Link to="/cart/page">
                    <button className="btn btn-secondary">Pagar</button>{" "}
                  </Link>
                  <p>{data.p?.totalPrice}</p>
                </div>
              </div>
            </div>
          );
        }))
        :
        (
        <p> No hay producto</p>
      )}
    </>
  );
};

export default CartInternal;
