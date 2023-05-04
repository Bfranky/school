import React, {useState} from 'react'

function TOdoform(props) {
    const [input, setinput] = useState ('');
    

    const handleChange = b => {
        setinput(b.target.value);
    };

    const handleSubmit = b => {
      // console.log('b', b)
        b.preventDefault();
        // console.log(input);
        // document.querySelector('.todo-input').value = ('');

        props.onSubmit ({
            id :Math.floor(Math.random () * 10000),
            Text: input
        });

        setinput('');

    };
  return (
   <div>
    
     <form className='todo-form' onSubmit={handleSubmit}>
        <input type='text' 
          placeholder='Add a todo'
          value={input}
          name='text' 
          className='todo-input'
          onChange = {handleChange}
          />
          <button type='submit' className='todo-button'>
            Add todo  
          </button>
     </form>
     </div>
   
  )
}

export default TOdoform