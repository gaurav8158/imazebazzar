import React from "react";
import "./Display.css"

const Displayimage=({images})=>{
    console.log(images);
return(
    <div className="img-box">
        {
            images.map((pic,index)=>{
              return  <img className="image" key={index} alt={pic.alt_description} src={pic.urls.small}/>
            })
        }
    </div>
)
}

export default Displayimage;