import React, {useState} from 'react'

export const InputForm = ({addTodo}) => {
    const [value, setValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(value) //to record, can see on console

        setValue('')
    }


  return (
    <form className='InputForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value}
        placeholder='What is in your mind today? Note it!' onChange={(e) => setValue(e.target.value)}/> {/*to records the inputted value */}
        <button type='submit' className='todo-cover'>Note it!
        </button>
    </form>
  )
}


