import React, { useState } from 'react'
import {Link} from "react-router-dom"

function Home() {


   const[data,setdata]=useState([])

  let fetch_data =()=>{

    fetch("https://jsonplaceholder.typicode.com/users")

    .then(res => res.json())
 
    .then(data =>setdata(data))

  }
  
  
  return (
    <>



    <div>home</div>

    <li><Link to="/">back to tab</Link></li>


    <button onClick={fetch_data}>Click</button>


    <div>{data.map((v)=>(

     <p key={v.id}>{v.email}</p>


    ))}</div>

    </>
  )
}


export{Home}