import React from "react";

import { Link,Outlet } from "react-router-dom";

function Links(){



    return(
<>


 <div>
 <li> <Link to="/home"> home</Link>  </li>

 <li> <Link to="/aboutus"> aboutus</Link>  </li>

 </div>


</>



    )


}


export{Links}