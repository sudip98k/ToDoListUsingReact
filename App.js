import React, { useState } from 'react'
import ToDoList from './TodoList'
function App() {
  const[inputList,setInputList] =useState("");
  const[items,setItems] = useState([]);

  const itemEvents=(e)=>{
    e.preventDefault();
    setInputList(e.target.value);
    
  }

  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList];
    });
    setInputList("");
  };

  const deleteItem=(id)=>{
    // console.log('deleteItem');
    setItems((oldItems)=>{
      return oldItems.filter((arrElement,index)=>{
          return index!==id;
      });

    });
  }

  return(
    <>
      <div className='main_div'>
          <div className='center_div'>
            <br/>
            <h1>ToDoList</h1>
            <br/>
            <input type='text' placeholder='Add Your Task' onChange={itemEvents} value={inputList}  required/>
            <button onClick={listOfItems}>Add</button>
            <ul>
                {
                  items.map((item,index)=>{
                    return <ToDoList 
                    value={item} 
                    key={index} 
                    id={index}
                    onSelect={deleteItem}
                    />
                  })
                }
            </ul>
          </div>
      </div>
    </>
  );
};

export default App;
