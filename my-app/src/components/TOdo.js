import React, {useState} from 'react'
import TOdolist from './TOdolist'
import {RiCloseCircleline} from 'react-icons'
import {TiEdit} from 'react-icons'

 function TOdo({todos, completeTodo, removeTodo} ) {
    const [edit, setEdit] = useState({
        id: null,
        value: ('')
    });
  return  TOdolist.map((edit, index) =>{
    <div className={TOdo.isComplete? 'todo-row complete':
        'todo-row'} key = {index}>


            <div key={todo.id} onclick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
            <RiCloseCircleline
            onClick={()=> removeTodo(todo.id)}
            className='delete-icon'
            />
             <TiEdit onClick={()=> setEdit ({id: todo.id, value: todo.text})}
            className='edit-icon'
            />
            </div>
        </div>
  });
}

export default TOdo