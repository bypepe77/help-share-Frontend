import React from 'react';
import "../../css/styles.css";
import { ReactTinyLink } from 'react-tiny-link'

const ExistLink = (text) =>{
    const urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    const getUrl =  text.match(urlRegex, (url) =>{
        return url
    })
    const deleteUrl = text.replace(urlRegex, "");
    if(getUrl){
          return ( 
             <div>
                 <p className="post-text">{deleteUrl}</p>
                 <ReactTinyLink
                     cardSize="small"
                     showGraphic={true}
                     maxLine={3}
                     minLine={3}
                     url={getUrl.toString()}
                 />
             </div>
         )
      }else{
          return <p className="post-text">{deleteUrl}</p>
     }
 }

export {
    ExistLink,
}