import React,{useState,useEffect} from "react";
import axios from "axios";
import "./Search.css";

const Searchimage=({addimages})=>{
    const [searchTerm,setSearch]=useState("cat");
  
  //  console.log("Access Key", process.env.REACT_APP_ACCESS_KEY)

  useEffect(()=>{
    getImages();
  },[])

function getImages(){
axios.get("https://api.unsplash.com/search/photos", {
params: {
client_id: process.env.REACT_APP_ACCESS_KEY,
query : searchTerm
}
})
.then (response => addimages(response.data.results))
.catch((error)=>console.log(error));
}
function reset(){
    setSearch("");
    addimages([]);
}
return(
    <div className="search-box">
        <input className="input" type="text" 
        placeholder="search images" 
       value={searchTerm} onChange={e=>setSearch(e.target.value)}/>
        <button className="search" onClick={getImages}>Search</button>
        <button className="reset" onClick={reset}>Reset</button>
    </div>
)
}

export default Searchimage;