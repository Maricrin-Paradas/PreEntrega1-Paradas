import { createContext, useContext} from "react";
import useLocalStorage from "../LocalStorage/Hook";

const CartCreateContext = createContext({
    products: [],
    addToCart: () => {},
    claerCart: () => {},
    isInCart: () => {},
    totalPrice: () => {},
    totalProducts: () => {},
    removeProduct: () => {},
})

const useCart = () => {
    return useContext(CartCreateContext)
}

const CartCreateContextProvider = ( {children}) => {

    const [products, setProducts] = useLocalStorage('products', [])

    /*const addToCart = (items, quantity) => {

        if (isInCart(items.p.id)){
            setProducts(products.map(product => {
                return product.p.id === items.p.id ? {p:{...products.p}, quantity: product.quantity + quantity } : products
            }));
        } else {
            setProducts([...products , {p:{...items.p}, quantity:1}]);
        }

     }*/

     const addToCart = (items, quantity) => {
        let newCart;
        let product = products.p.find(product => product.p.id === items.p.id);
        if (product) {
            product.quantity += quantity;
            newCart = [...products]
        } else {
            product = { p: items, quantity: quantity};
            newCart = [...products, product]
        }
        setProducts(newCart)
     }

    const totalPrice = () => {
        return products.reduce((prev, act) => prev + act.quatity + act.price, 0);
    }

    const totalProducts = () => products.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const isInCart = (id) => products.some(product => product.p?.id === id);

    const claerCart = () => setProducts([])

    const removeProduct = (id) => setProducts(products.filter(products => products.id !== id));
    
    const context = {
        products: products,
        addToCart: addToCart,
        claerCart: claerCart,
        isInCart: isInCart,
        removeProduct: removeProduct,
        totalPrice: totalPrice,
        totalProducts: totalProducts,
    }

  return (
    <CartCreateContext.Provider value={context}>
        {children}
    </CartCreateContext.Provider>
  )
}

export  { useCart, CartCreateContextProvider}