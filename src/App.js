import Reacts from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './componente/NavBar.js';
import ItemListContainer from './componente/ItemListContainer';
import ItemDetail from './componente/ItemDetail';

function App() {
return (
  <>
  <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path={'/'} element ={<ItemListContainer/>}/>
        <Route path={'/category/:id'} element ={<ItemListContainer/>}/>
        <Route path={'/item/id'} element ={<ItemDetail/>}/>
    </Routes>
    </BrowserRouter>
  </>
);
}



export default App;
