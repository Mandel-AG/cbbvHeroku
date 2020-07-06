import React from 'react';
import {Link} from 'react-router-dom'
import './header.css';

function Header(props){
   return(
      <div className="containerHeader">
         <div className='logo'>
            <img src='https://i.pinimg.com/236x/4b/ef/18/4bef184c1d519a0e7a8bfd62bacc5982--face-design-oculto.jpg' 
            alt='logo' />
         </div>
         <div>
            <h1 className='titleHeader'>C.B.B.V.</h1>
            <h3 className='subtitleHeader'>Basket-Ball Villebon</h3>
         </div>
         <nav>
            <ul className='ulHeader'>
               <Link className='link' to='/'> Accueil </Link>
               <Link className='link' to='/club'> Club </Link>
               <Link className='link' to='/categories' > Categorie </Link>
               <Link className='link' to='/evenements' > Evenement </Link>
               <Link className='link' to='/gallery'> Gallery </Link>
               <Link className='link' to='/contact'> Contact </Link>
               <Link className='link' to='/boutique'> Boutique </Link>
            </ul>
         </nav>
      </div>
   )
}


export default Header ;