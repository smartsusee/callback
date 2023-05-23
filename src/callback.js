  import React, { memo, useCallback, useState } from "react";



  function Fun_1(){


    const[data,setdata] =useState(0)

    let increament =useCallback(()=>{


       
        setdata(Math.floor(Math.random()*100))
  
      },[data])
  

    return(<>
    
    <p> {data}</p>
    
    <Increament increament={increament}/>
    
    
    </>)



  }




  let  Increament = memo((props)=>{


    console.log("your value is random");
   
    return(<>
    
    
    <button onClick={props.increament}>Click</button>
    
    </>)




  })



  export{Fun_1}