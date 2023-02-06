import "./styles.css";
import {useState} from "react"
export default function App() {
 const details=[{title:"vicky" },
 {title:"vinoth" },
 {title:"vi" },
 {title:"pavi" },
 {title:"pav" },
 {title:"kavi" },]
   const [init,setinit]=useState('')
   const changehandler=(e)=>{
     setinit(e.target.value)
   }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input value={init} onChange={changehandler} type="text"/>
       {details.filter(item=>item.title.toLocaleLowerCase().includes(init)).map((name,index)=>{
         return <h3 key={index}>{name.title}</h3>
       })}
    </div>
  );
}
