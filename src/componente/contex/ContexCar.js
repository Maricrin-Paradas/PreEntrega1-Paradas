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

    const addToCart = (item, quantity) => {
        if (inInCart(item.id)) {
            setProducts(products.map(product => {
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : products
            }));
        } else {
            setProducts ([...products, {...item, quantity}])
        }
     }

    const claerCart = () => {
        setProducts([])
     }

     const inInCart = (id) => products.some(product => product.id === id );

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