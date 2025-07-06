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
