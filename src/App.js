import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './componente/NavBar.js';
import ItemListContainer from './componente/ItemListContainer';
import ItemDetail from './componente/ItemDetail';
import ItemAI from './componente/ItemAI';

function App() {
return (
  <>
  <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path={'/'} element ={<ItemListContainer/>}/>
        <Route path={'/category/:tipo'} element ={<ItemAI/>}/>
        <Route path={'/item/:id'} element ={<ItemDetail/>}/>
    </Routes>
    </BrowserRouter>
  </>
);
}



export default App;
