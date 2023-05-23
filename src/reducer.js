import React, {useReducer } from "react";

// useReducer => cash collector  dispatch,state
   
    // state     => initialvalue cook 

    //    dispatch =>  btn => anonymous fun => type: "increament"  -5rs 
  
      

    function reducer(State,action){


        switch (action.type) {
            case "increament":
                
             return{count:State.count+1}

        case "decreament":
                
        return{count:State.count-1}

        
        case "reset":
            return{count:0}
        
            default:
                break;
        }


    }

    
    


    function Counter(){

   
        // const[data,setdata] =useState(0)


        
        const[State,dispatch] = useReducer(reducer,{count:0})



        // state:{

        // count:0
        // },


        // dispatch ({type:"increament"})


        // reducer(state,dispatch)
                       
        return(<>
               
          <p>{State.count}</p>        



<button onClick={()=>dispatch({type:"increament"})}>Increament</button>
<button onClick={()=>dispatch({type:"decreament"})}>Decreament</button>
<button onClick={()=>dispatch({type:"reset"})}>reset</button>


            
            </>)



    }

   



    export{Counter}
   
