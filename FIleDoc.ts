// so this when define the var to use it 

type Props = {
  name: string;       
  age?: number;      
};

// and assume  you wanan  create function here

const  Fire  : React.FC<Props> = ({name,age}) =>{

  return(
  <h1>Hello my name is {name} and my age is {age}/>
    ) 
} 

// so the question here what is age?? 
// <Fire name ={"ghaith"} age= {199}>
//<Fire name ={"ghaith"}/> 
// so you can pass age or no 

const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);


//

const inputRef = useRef<HTMLInputElement>(null);

//

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => { ... }
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { ... }

// to use context api 


 
interface AppContextType {
  user: string;
  setUser: (u: string) => void;
}
 
const AppContext = createContext<AppContextType | null>(null);
// this new lvel for using children

import React from "react"


interface UsingChildreen {
 children   :  React.ReactNode

}

const Usehook :React.FC<UsingChildreen>   =  ({children}) =>{

    return (
      <div>{children}</div>
    )
}

const App :React.FC = ()=>{
   return(
    <> 
    <Usehook>Hello this is working</Usehook>
    <Usehook> this is {true}</Usehook>
    </>
    
   )
}

export default App


{pathname: '/', search: '', hash: '', state: null, key: 'default'} 
// so here when  your client search aboout somehting you can save here were he was aand what he search you got the idea ?? go babayy

