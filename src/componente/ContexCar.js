import React, { createContext, useContext, useState} from "react";

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

    const addToCart = (product) => {
        setProducts( products => [...products, product] )
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
    <CartCreateContext.Provider>
        {children}
    </CartCreateContext.Provider>
  )
}

export  {CartCreateContextProvider, useCart }