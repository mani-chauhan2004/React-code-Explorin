import React, { useState } from 'react'

function TodoList() {
    const [inputvalue , setInput] = useState("");
    const [todoList , setTodo] = useState([]);
    function handleChange(e)
    {
        console.log(e.target.value);
        setInput(e.target.value);
    }
    function handleClick()
    {
        const newlist = [...todoList , {
            id : Date.now(),
            task : inputvalue
        }]

        setTodo(newlist);
        setInput("");
    }
 
  return (
    <>
        <input type="text" value={inputvalue} onChange={function(e){ handleChange(e)}}/>
        <button type="button" onClick={handleClick}>Addtodo</button>
        <ul>
            {
                todoList.map(function(value){
                    return (<li>
                        {value.task}
                        <button onClick={handleDelete}>delete</button>
                    </li>)
                })
            }
        </ul>
    </>
  )
}

export default TodoList