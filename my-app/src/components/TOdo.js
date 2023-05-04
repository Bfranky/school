import React, {useState} from 'react'
import TOdolist from './TOdolist'

function TOdo() {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
  return  TOdolist.map((edit, index) =>{
    <div className={TOdo.isComplete? 'todo-row complete':
        'todo-row'} key = {index}>


            <div key={todo.id} onclick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                dispatchEvent (setEdit, useState);
            </div>


        </div>
  });
}

export default TOdo