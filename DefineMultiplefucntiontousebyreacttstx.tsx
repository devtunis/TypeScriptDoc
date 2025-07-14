import React from "react";

type   MyDeclarefunction  =  {
        myfucntion  :  (item : React.ChangeEvent<HTMLInputElement>) => void
}


 
const InputD : React.FC = ()=> {

          const functions: MyDeclarefunction = {
                    myfucntion: (e) => {
                    console.log("myfucntion:", e.target.value);
                    }  
          }
   
 
             
         
            return <input  type="text" onChange={functions.myfucntion}/>
            
} 

export default InputD

 // this very good thing 
