import {Link,Outlet} from "react-router-dom"
import './App.css';



function Layout (){


    return(<>
    
         <div id="container_1">

         
              <li> <Link to="/home"> home</Link>  </li>
              <li> <Link to="/product"> product</Link>  </li>
       
    <Outlet/>


         </div>
    
    
    
    
    </>)




}





export {Layout}



