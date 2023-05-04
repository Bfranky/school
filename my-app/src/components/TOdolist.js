import React, {useState} from 'react'
import TOdoform from './TOdoform'

function TOdolist() {

    const [todos, setTodos] = useState([]);


    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        
    };
  return (
    <div>
        <h1> Plans for today are?</h1>
        <TOdoform onSubmit = {addTodo}/>
    </div>
  )
}

export default TOdolist