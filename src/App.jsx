import { useState } from 'react'


function App() {
  const [task, setTask] = useState("");

  const list = [
  "Apple",
  "Apple Watch",
  "Apple MacBook",
  "Apple iPhone",
  "Banana",
  "Banana Milkshake",
  "Orange Juice",
  "Orange",
  "Grapes",
  "Grape Juice",
  "Mango",
  "Mango Pulp",
  "Mango Juice"
  ];


  const filteredList = list.filter((element) =>{
    return element.toLowerCase().includes(task.toLowerCase());
  });


  return (
    <div>

    <label htmlFor="task">Input : </label>
    <input type='text'
           name='task'
           value={task}
           onChange={(e)=>setTask(e.target.value)}>      
    </input>

    {filteredList.length==0 && <p>No results found.</p>}

    {
      
      filteredList && (
        <ul>
        {
          filteredList.map((element)=>{
            return <li>{element}</li>
          })
        }
      </ul>
      )
      
    }


      
    </div>
  )
}

export default App
