import express, {Request,Response}  from "express"
import {OAuth2Client} from "google-auth-library"
import cors from "cors"
import bodyParser  from "body-parser"
const app = express()
const Port  = 3000
app.use(cors())
app.use(bodyParser.json())
const CLIENT_ID = "195137126699-g72u4dq90ebts03p25j3scmjr6klth2r.apps.googleusercontent.com";
 
const client = new OAuth2Client(CLIENT_ID);

app.get("/",(req:Request,res: Response)=>{
            
            res.json(client);
          
})



app.post("/auth/google", async (req: Request, res: Response) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    console.log(payload);
    res.json({email :payload?.email,pictuer : payload?.picture,name:payload?.name});  
  } catch (error) {
    console.error("token validation error", error);
    res.status(401).json({ error: "invalid token" });
  }
});



app.listen(Port,()=>console.log(`This Serve Runing.... ts in port ${Port} :`))

// this is backend 
// and this is the front end


import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider,GoogleLogin } from "@react-oauth/google";
import axios from "axios";
const CLIENT_ID = "195137126699-g72u4dq90ebts03p25j3scmjr6klth2r.apps.googleusercontent.com";
 
const Auth: React.FC  =()=>{
       
          type GoogleUser ={
                    email:string,
                    pictuer : string,
                    name:string
          }

               const [state,setdata] = useState<GoogleUser>()

            const handleSuccess = async(credentialResponse:any) => {
                    console.log("Google ID Token:", credentialResponse.credential);
                    const pushdata = await axios.post<GoogleUser>("http://localhost:3000/auth/google",{
                              "token":credentialResponse.credential
                    })
                 
                    if(!pushdata){
                              console.error("this error")
                              

                    }else{
                              console.log(pushdata.data)
                              
                              setdata(pushdata.data)
                    }
                     
                   
                  

                    };

     


            const handleError = () => {
                    console.log("Login Failed");
                    };


                    useEffect(()=>{

                console.log(state,"this the state prevnet")
                    },[state])
          return(  <>      

                 <div style={{display:"flex",flexDirection:"column",gap:"10px",justifyContent:"center",alignItems:"center"}}>
                            <input type="text" style={{width:"60%",borderRadius:"3px"}}/> 
                            <input  type="text" style={{width:"60%",borderRadius:"3px"}}/>  
                            <button style={{width:"60%",borderRadius:"3px",cursor:"pointer"}}>auth</button>
                 </div>
          
                   <GoogleOAuthProvider clientId={CLIENT_ID}>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                    <GoogleLogin
                              onSuccess={handleSuccess}
                              onError={handleError}
                                
                    />
                    </div>

                    </GoogleOAuthProvider>

                   {state && 
                    <div> 
                              <div>Welcome {state?.email}</div>
                              <div>Weclome  mr{state?.name}</div>
                              <div> <img style={{width:"50px",height:"50px",borderRadius:"40px",cursor:"pointer"}} src={state?.pictuer} alt="" loading="lazy"/></div>

                    </div>}

                   </>
          )
}

export default  Auth


