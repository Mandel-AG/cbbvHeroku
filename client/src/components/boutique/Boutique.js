import React from 'react';
import './boutique.css';

function Boutique(props){

   const dataProducts = props.products;


   const products = dataProducts.map(  product =>(
      <div className='eachEvents' key={ product.id }>
         <h3>{ product.name }</h3>
         <p>{ product.description }</p>
         <img src={ product.picture} alt={ product.name } width='500px' />
         {/* {(evenement.file) ? <img src={ evenement.file} alt={ evenement.name } /> : (null)} */}
      </div>
   ))
   return(
         <div className="containerBoutique">
            <h1>Produits</h1>
            <div className='divProduits'>
               { products }
            </div>
         </div>

   )
}


export default Boutique ;