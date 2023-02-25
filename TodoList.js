import React from 'react'

function TodoList(props) {
  return (
    <>
        <div className='todo_style'>
            <li>{props.value}</li>
            <button onClick={()=>{
                (props.onSelect(props.id));
            }}>Del</button>
        </div>

    </>
  )
}

export default TodoList
