import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id) 

        setValue('')
    }


  return (
    <form className='InputForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value}
        placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/> {/*to records the inputted value */}
        <button type='submit' className='todo-cover'>Update now!
        </button>
    </form>
  )
}


