
import React, { createContext, useContext, useState } from "react";      


    // context api     

const var_data =createContext();






function First(){


    const[value,setvalue]=useState("My First Value")


    return(
   
        <>
        {/* <h1>{value}</h1> */}
       


       <var_data.Provider value={value}>
       
       <Second/>


       </var_data.Provider>      


        </>


       
    )
}




function Second(){


  const user_data =useContext(var_data)


 return(<>
 
 
 <h1>{user_data}</h1>
 <h1>my Second value</h1> 
 </>)


}
export{First}