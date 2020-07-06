import React, { Component } from 'react';
import './gallery.css';

class Gallery extends Component{
   constructor(props){
      super(props)

      this.state= {
         filteredMedias : []
      }
   }

  
   

   // const filteredMedia = (type) =>{  medias.filter(media => (
   //    media.typeMedia.toLowerCase() === type 
   // ))};
   

   // const mediasList = filteredMedia.map(  media =>(
   //       <img src={ media.file} alt={ media.name } width='500px' />
   // ))


      filterMedias = (type) => {
         const medias = this.props.medias;
         const newMedias = [ ...medias];
         const filtered = newMedias.filter( media => media.mediaType === type)
         this.setState({
            filteredMedias : filtered
         })
         console.log(this.state.filteredMedias)
      }
      

   render(){
   console.log(this.props.medias)
      const mediaList = this.state.filteredMedias.map(media => (
         <div className='chaqueMedia' key={media.id}>
            <img src={ media.picture } alt={ media.name } />
            <p>{ media.name }</p>
         </div>
      ))
            
      
      return(
         <div className="containerGallery">
            <ul className='ulGallery'>
               <li  onClick={()=> this.filterMedias('product') }>Equipes</li>
               <li  onClick={()=> this.filterMedias('event') }>Evenements</li>
            </ul>

            <div className='divGallery'>
               { mediaList }
            </div>            
         </div>

      )
   }
   
}


export default Gallery ;