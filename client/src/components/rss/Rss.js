import React, { useState } from 'react';
import axios from 'axios';
import './rss.css';

function Rss(props){
  const [ffbb, setffbb] = useState([]);

//   axios.get('http://www.ffbb.com/rss2.xml', {header :{'Access-Control-Allow-Origin':'*'}})
//        .then(a => console.log(a))
  

//   const FetchDataFromRssFeed = () => {
//     var request = new XMLHttpRequest();
//     request.onreadystatechange = () => {
//       if (request.readyState === 4 && request.status === 200) {
//         var myObj = JSON.parse(request.responseText);
//         for (var i = 0; i < 1; i ++) {
//           setffbb({recentBlogPost: {
//             name: myObj.items[i].title,
//             url: myObj.items[i].link
//           }})
//         }
//       }
//     }
//     request.open("GET", "http://www.ffbb.com/rss2.xml", true);
//     request.send();
//     // {header :{'Access-Control-Allow-Origin':'*'}}
//   }
  
//   FetchDataFromRssFeed();
// console.log(FetchDataFromRssFeed)
  


  // const fluxFFBB = ffbb.map(elem =>(
  //   <li>{ elem.name }</li>
  // ))



  

  return(
    <div className='containerRss'>

      <div className='containerRssFFBB'>
        <div>
          <h3> FFBB </h3>
        </div>
        <div className='divRssFFBB'>
            <ul className='ulRssFFBB'>
              {/* { fluxFFBB } */}
            </ul>
        </div>
      </div>

      <div className='containerRssNBA'>
        <div>
          <h3> NBA </h3>
        </div>
        <div className='divRssNBA'>
            <ul className='ulRssNBA'>
              {/* <li>{ fluxFFBB }</li> */}
            </ul>
        </div>
      </div>
    </div>
  )
}


export default Rss;