import { useState } from "react"
function Handle(){
 
  const[toDo,setToDo]=useState(["read","write"])
  const [inputValue, setInputValue] = useState("");

  function trackChange(event){
    setInputValue(event.target.value);

  }
  function addItem(){
   if (inputValue.trim() !== "") {
      setToDo([...toDo, inputValue]);  // Add input to the list
      setInputValue("");               // Clear input
    }

  }
  function modifyTodo(indexToDelete){
    const updatedList=toDo.filter((_,index)=>index !=indexToDelete);
    setToDo(updatedList);

  }
  

  return (
    <div className="outer">
      <p>Todays goal To Be DOne</p>
      <input style={{height:'30px' ,width:'300px'}} type="text" placeholder="Enter task to be done" value={inputValue} onChange={trackChange} />
      <button style={{background:"green",height:'30px' ,width:'50px'}}  onClick={addItem}> Add</button>
      <br /> <br />
      <li>
        completing pending task
      </li>
      <ul>
        {toDo.map((task,index)=>{
         return <li key={index}>{task} <br />   <button style={{background:"red"}} onClick={()=>modifyTodo(index)}>delete</button></li>
        })}
      </ul>
    </div>
  )
    
  

}
export default Handle;
