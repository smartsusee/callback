import React, { useState } from "react";



   function Settime_out(){

    
    const[data,setdata] =useState("welcome to React class")

   let Change =()=>{

     

    setdata("change data")
     
     
    setTimeout(()=>{
        
        setdata("")
       

    },3000)   

   }
 
     return(<>
    
    
        <h1>{data}</h1>


        <button onClick={Change}>click</button>

    </>)



   }



   export{Settime_out}