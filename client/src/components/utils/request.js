import axios from 'axios';

// export const medias = axios.get('http://localhost:3004/api/medias')
// export const events = axios.get('http://localhost:3004/api/events')
// export const clubs = axios.get('http://localhost:3004/api/clubs')
// export const scores = axios.get('http://localhost:3004/api/scores')
// export const teams = axios.get('http://localhost:3004/api/teams')
// export const gyms = axios.get('http://localhost:3004/api/gyms')
// export const products = axios.get('http://localhost:3004/api/products')
// export const members = axios.get('http://localhost:3004/api/members')


export const medias =  axios.get('http://localhost:3004/api/medias')
.then(medias =>  medias.data )
   // const media = medias.data.map(element => ({
   //    id: element._id,
   //    name : element.name,
   //    mediaType : element.mediaType,
   //    team : element.team,
   //    description : element.description,
   //    picture : element.picture
   //  }))

