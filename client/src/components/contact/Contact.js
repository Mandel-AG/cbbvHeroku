import React, { Component } from 'react';
import './contact.css';
import {Formik} from 'formik'
import axios from 'axios';

class Contact extends Component {
//   constructor(props){
//      super(props)


//    //   this.state = {
//    //      name:'',
//    //      email:'',
//    //      message:''
//    //   }
//   }


  submit = (values, actions) => {
    console.log(values.name);
    console.log(actions)

    if(window.confirm('Voulez-vous envoyer ce mail ?')){
      axios({
         method: "POST", 
         url:"http://localhost:3004/send", 
         data: {
            name: values.name,
            email: values.email,
            message: values.message
         }
      })
      alert('Votre message est envoye')
      actions.resetForm()
    } 
    else{
       return null;
    }

      
   }
  

  validate = (values) =>{
  
    let errors={}
    if(values.message && values.message.length < 10){
      errors.message = 'trop court'
    }
    return errors

  }

  render() {
    return (
      <div className="containerContact">
         <div className='divInfos'>
            <h3>Informations</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu porta mi, ac dignissim nisi. 
               Orci varius natoque penatibus et magnis dis parturient montes, 
               nascetur ridiculus mus. Sed eu luctus quam. Aenean rhoncus dui dolor, 
               s tortor volutpat vel. Maecenas ac arcu nunc. Quisque aliquet quam id laoreet pulvinar. 
               Maecenas bibendum nibh eu vestibulum pulvinar. Nunc vitae enim dapibus, faucibus eros at, 
               consectetur augue.</p>
         </div>

         <div className='divInputContact'>

            <h3>Vous pouvez nous contacter directement ici.</h3>
            <p>Nous vous repondrons dans les plsu bref delais</p>
            <Formik
               onSubmit={this.submit}
               initialValues={{name: '', email: '', message: ''}}
               validate={this.validate}
            >
               {({values,
               handleBlur,
               handleChange,
               handleSubmit,
               isSubmitting,
               errors
            }) => (
                  <form onSubmit={ handleSubmit } className="bg-white border p-5 d-flex flex-column">
                  <div className="form-group w-50">
                     <label>Nom</label>
                     <input type="text"
                           name="name"
                           className="form-control "
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.name} />
                     <div className='text-danger'>{errors.name}</div>
                  </div>
                  <div className="form-group w-50">
                     <label>Adresse email</label>
                     <input type="email"
                           name="email"
                           className="form-control"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.email} />
                  </div>
                  <div className="form-group w-50">
                     <label>Message</label>
                     <textarea type="text"
                           name="message"
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.message} />
                     <div className='text-danger'>{errors.message}</div>

                  </div>
                  <button type="submit" className="btn btn-dark w-25" disabled={isSubmitting}>
                     Envoyer
                  </button>
                  </form>
               )}
            </Formik>
         </div>
      </div>
    )
  }
}





export default Contact ;