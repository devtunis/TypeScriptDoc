import React, { useState } from "react"
import type { User } from "../exportTypes/DeclareTypes";
const Login : React.FC = () =>{
      const [user,setuser] = useState< User>({} as User );

      return(
           <>
           <div>
            <button onClick={()=>setuser({firstname:"ghaith",lastname:"nahdi",job:"softaware enginnerr",proudct :{
                  idProudct :1,name_proudct : "wepp",color:"red"
            }})}>log in </button>
            <br/>
            <button onClick={()=>setuser({} as User )}>log out</button>
            <div>
                  <h1>Welcome {user?.firstname}</h1>
                  <h1>Welcome again {user?.lastname}</h1>
                  <h1>Your job: {user?.job}</h1>
                  <h1>your proudct id  {user?.proudct.idProudct}</h1>
                  <h1>your nameproudct {user?.proudct.name_proudct}</h1>
                  <h1>your proudct color  {user?.proudct.color}</h1>
            </div>
           </div>
           </>
      )
}

export default Login
