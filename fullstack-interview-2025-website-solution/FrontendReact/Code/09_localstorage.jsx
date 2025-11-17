import {useState, useEffect} from "react"

function App(){
    const [name, setName] = useState("");

     // Load saved data on initial render
     useEffect(()=>{
        const savedName = localStorage.getItem("name");
        if(savedName){
          setName(savedName)
        }
     }, []);

      // Save data whenever it changes
      useEffect(()=>{
        localStorage.setItem("name", name);
      },[name]);

      return(
   <div>
    <h2>Data Persistence with LocalStorage</h2>
        <input type="text" 
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />
        <p>Stored Name : {name}</p>
  </div>
      )
}

export default App