import { createContext, useContext, useState} from "react";

const CartCreateContext = createContext({
    products: [],
    addToCart: () => {},
    claerCart: () => {},

})

const useCart = () => {
    return useContext(CartCreateContext)
}

const CartCreateContextProvider = ( {children}) => {

    const [products, setProducts] = useState([])


    const addToCart = (product, conunt) => {
        const inCart = products.find(
            (productInCart) => productInCart.id === product.id
        );
        if (inCart) {
            setProducts(
                products.map((productInCart) => {
                    if (productInCart.id === product.id) {
                        return { ...inCart, amount: conunt > 1 ? inCart.amount + conunt : inCart.amount + 1};
                    } else return productInCart;
                })
            );
        } else {
            setProducts ([...products, { ...product, amount: 1 }]);
        }
     }

    const claerCart = () => {
        setProducts([])
     }


    const context = {
        products: products,
        addToCart: addToCart,
        claerCart: claerCart,

    }

  return (
    <CartCreateContext.Provider value={context}>
        {children}
    </CartCreateContext.Provider>
  )
}

export  { useCart, CartCreateContextProvider}