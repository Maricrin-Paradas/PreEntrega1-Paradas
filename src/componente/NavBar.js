import imagen from '../img/Group 5.png';
import CartWidget from './CartWidget.js';
import {Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100;">
  <div className="flex-1">
   <Link to= '/'> <a className="btn btn-ghost normal-case text-xl">Teje con Amor</a> </Link>
  </div>
  <div className="flex-none">
    <div >
      <CartWidget/>
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <Link to= '/'> <img src= {imagen} /> </Link>
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li> <Link to= 'category/aguja'> Agujas e Implementos  </Link></li>
        <li> <Link to= 'category/hilo'> Hilos  </Link></li>
      </ul>
    </div>
  </div>
</div>
  )
}

export default NavBar