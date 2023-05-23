import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './home'
import { Layout } from './link'
import { Product } from './product'


function Parent (){

 return(<>
 
      <div>

     <BrowserRouter>
     
        <Routes>

            <Route path='/' element={<Layout/>}/>
        
            <Route  path='/home' element={<Home/>} />
            <Route  path='/product' element={<Product/>} />

     



        </Routes>
     
     
     
     
     
     
     </BrowserRouter>





      </div>

 
 
 </>)




}

export {Parent}