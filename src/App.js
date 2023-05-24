import React,{ useState } from 'react';
import Searchimage from './Components/Searchimage';
import Displayimage from './Components/DisplayImage';
import './App.css';

function App() {
  const[images,setImages]=useState([]);
  return (
    <div className='container'>
       <h1>ImazeBazar</h1>
<Searchimage addimages={setImages}/>     
<Displayimage images={images}/>
    </div>
  );
}

export default App;
