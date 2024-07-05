
// unsplash.com -> ye image ka Api ke liye use karte h

import axios from 'axios';
import {Button,Form,InputGroup} from 'react-bootstrap';
import './App.css';
import { useState,useEffect } from 'react';

const App = () => {

  const [photo,setphoto]=useState("");
  const [output,setoutput]=useState([]);
  const [count,setcount]=useState(1);
  
  useEffect(() => {   /*line 13 to 15 -> show more */
    changephoto();
  }, [count]); 


  const key='Y6ngNpk7NX8maNkLT_yvcldVcvuo4SIyfsr6YbdGkqI';
  const changephoto=()=>{
    axios.get(`https://api.unsplash.com/search/photos?page=${count}&query=${photo}&client_id=${key}`)
    .then((res)=>{
      setoutput(res.data.results)
    }).catch((err)=>{
      alert('error')
    })
  }

 
  return (
    <>
<div className="container">
      <h1 className='toph1'>Image Search</h1>
    <div className='search'>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search something" onChange={(e)=>{setphoto(e.target.value)}} />
        <Button type='submit' onClick={changephoto} variant="outline-secondary" id="button-addon2">
          search
        </Button>
        </InputGroup>
    </div>
        <div className='container-2'>
        <div className='row'>

            {output.map((value)=>{
              return (
                <div  className='col-4 '>
                <img className='images' src={value.urls.small} />
                </div>
              )
            })}

        </div>
        </div>
        
    <button  className='more' onClick={()=>setcount(count+1)}> show more</button>

      
</div>
    </>
  )
}

export default App