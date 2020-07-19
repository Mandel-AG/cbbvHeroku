import React from 'react';
import './evenements.css';

function Evenements(props){

   const dataEvents = [...props.events]

   const events = dataEvents.map(  event =>(
      <div className='eachEvents' key={ event.id }>
         <h3>{ event.title }</h3>
         <p>{ event.content }</p>
         <img src={ event.picture} alt={ event.name } width='500px' />
         {/* <img src={'http://localhost:3003/api/pictures/files/ed48aaa4213af724f9637800b79dc892.png'} alt="a"/> */}
         <p>{event.date}</p>
         {/* {(event.file) ? <img src={ event.file} alt={ event.name } /> : (null)} */}
      </div>
   ))
   // events.map(pers =>{
   //    <div className='divevents'>
   //       <img />
   //       <p>Nom</p>
   //    </div>
   // })

   return(
         <div className="containerEvenements">
            <h1>Evenements</h1>
            <div className='divEvenements'>
               { events }
            </div>
         </div>

   )
}


export default Evenements ;