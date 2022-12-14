import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import {CartCreateContextProvider} from "./componente/Contex/ContexCar";
import NavBar from './componente/NavBar.js';
import ItemListContainer from './componente/ItemListContainer';
import ItemDetail from './componente/ItemDetail';
import ItemAI from './componente/ItemAI';
import CartWidget from './componente/Cart/CartWidget';
import CartInternal from './componente/Cart/CartInternal';
import Footer from './componente/Footer';
import PagePayment from './componente/Cart/PagePayment';

function App() {

return (
<CartCreateContextProvider>
  <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path={'/'} element ={<ItemListContainer/>}/>
            <Route path={'/cart'} element ={<CartWidget/>}/>
            <Route path={'/cart/internal'} element ={<CartInternal/>}/>
            <Route path={'/category/:tipo'} element ={<ItemAI/>}/>
            <Route path={'/item/:id'} element ={<ItemDetail/>}/>
            <Route path={'/cart/page'} element ={<PagePayment/>}/>
        </Routes>
        <Footer/>
  </BrowserRouter>
</CartCreateContextProvider>

);
}



export default App;
