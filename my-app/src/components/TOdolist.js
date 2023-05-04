import React, {useState} from 'react'
import TOdoform from './TOdoform'
import { FaBeer } from "react-icons/fa";

function TOdolist() {

    const [todos, setTodos] = useState([]);


    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        
    };


    const removeTodo = id =>{
      const removeArr = [...todos].filter(todo)
    }

    const compeleteTodo =id =>{
      let updateTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete == !todo.isComplete
        }
        return todo
      });
      setTodos(updateTodos);
    }
  return (
    <div>
        <h1> Plans for today are?</h1>
        <FaBeer />
        <TOdoform onSubmit = {addTodo}/>
        <Todo 
          todos={todos}
          completeTodo={completeTodo}
          />
    </div>
  )
}

export default TOdolist