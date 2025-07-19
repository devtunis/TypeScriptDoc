// this is new thing  how Handel with functions
mport  React from 'react';
type HandelClickByReactFunction ={
      HandelCLickFunction:()=>void
}  

const Button: React.FC <HandelClickByReactFunction>= ({HandelCLickFunction}) => {
    return <button onClick={HandelCLickFunction}>Click me negga</button>;
}; 

export default Button;


// this is old  way   how Handel with functions
mport  React from 'react';
type HandelClickByReactFunction ={
      HandelCLickFunction:()=>void
} 

function  Button ({HandelCLickFunction}:HandelClickByReactFunction) {
    return <button onClick={HandelCLickFunction}>Click me negga</button>;
}; 

export default Button;






// this good way for get all div from it 

<Button HandelCLickFunction ={(e)=>console.log(e.currentTarget)}/>



 import  React from 'react';
type HandelClickByReactFunction ={
      HandelCLickFunction:(event  : React.MouseEvent<HTMLDivElement>)=>void
} 

const Button: React.FC <HandelClickByReactFunction>= ({HandelCLickFunction}) => {
    return (
      <div onClick={HandelCLickFunction}>
            <div>hello this react</div>
            <button >Click me negga</button>
      </div>
    );
}; 
 
export default Button;
// look this bes idea  how can send  id from the butto
import  React from 'react';
type HandelClickByReactFunction ={
      HandelCLickFunction:(event  : React.MouseEvent<HTMLButtonElement> ,id: number)=>void
} 

const Button: React.FC <HandelClickByReactFunction>= ({HandelCLickFunction}) => {
    return <button onClick={(e)=>HandelCLickFunction(e,100)}>Click me negga</button>;
}; 

export default Button;


// and  how recive it 

   <Button HandelCLickFunction ={(e,id)=>console.log(e.target,id)}/>


// new thign how export and  import the data 
 
 export type  Props =  {
        name : string,
        lastname : string,
        age ?:number,

 } 
// so you do it like this 
 import type { Props } from "../exportTypes/DeclareTypes"   // and this way how you import it 
 

 
