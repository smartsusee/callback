import React from "react";

import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Links } from "./newlink";
import { Home_1 } from "./home_1";



function Parent(){



    return(<>
    
            
       <BrowserRouter>
       
       
           <Routes>

              <Route path="/" element={<Links/>}/>
              <Route path="/home" element={<Home_1/>}/>




           </Routes>
       
       
       
       
       </BrowserRouter>
    
    
    
    
    </>)



} 


export{Parent}