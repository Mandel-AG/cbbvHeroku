import React from 'react';
import './evenements.css';

function Evenements(props){

   const dataEvents = [...props.events]

   const events = dataEvents.map(  event =>(
      <div className='eachEvents' key={ event.id }>
         <h3>{ event.title }</h3>
         <p>{ event.content }</p>
         {/* <img src={ event.picture} alt={ event.name } width='500px' /> */}
         <img src={`data:image/png;base64,${props.postImgBase64}`} alt="a"/>
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