import { createContext, useContext, useState } from 'react';
import './App.css';
// import { BrowserRouter } from 'react-router-dom';


// context api :

    // createconstext
    //  usecontext 

    // key var_name_1 =createcontext();
    // key var_name_2 =useContext(var_name_1);

 const user_data = createContext();


const variable_data =createContext();

function Function1() {

  const[values,setValues] =useState("my first fun1 !")

  return (
    <>
    
      <user_data.Provider value={values}>

        <Function2/>
      </user_data.Provider>
    {/* <div>{values}</div> */}
    
    </>
  );
}

function Function2(){

   const user_data_find = useContext(user_data)


   const[salary,setsalary] =useState("20000")
   return(<>
   


   <variable_data.Provider value={salary}>
 
<Function3/>


   </variable_data.Provider>
   
   <h1>my second function2 !</h1>
   
   <h1>{user_data_find}</h1>
   
   </>)



}


function Function3(){

 const salary_data =useContext(variable_data)






 

    return(<>
    
    <h1>{salary_data}</h1>
    
    {/* <button onClick={post_data}>Click</button> */}
    
    </>)

}



export {Function1};


// BrowserRouter, routes, route link ,outlet   "/"