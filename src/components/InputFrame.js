import React, {useState} from 'react'
import {InputForm} from './InputForm'
import {EditTodoForm} from './EditTodoForm'
import {Todo} from './Todo'
import {v4 as uuidv4} from 'uuid';
uuidv4();



export const InputFrame = () => {
    const [todos, setTodos]=useState([])

    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }

    const toggleComplete = id  => {
      setTodos(todos.map(todo => todo.id === id? {...todo, completed:!todo.completed} : todo))
    }

    const deleteTodo = id => {
      setTodos(todos.filter(todo => todo.id!== id))
    }  

    const editTodo = id => {
      setTodos(todos.map(todo => todo.id === id? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
      setTodos(todos.map(todo => todo.id === id? {...todo, task, isEditing: !todo.isEditing} : todo))
    }
      
return (
    <div className='InputFrame'>
        <h1>Hurry up! Don't be behind the deadline!</h1>
        <InputForm addTodo={addTodo} />
        {todos.map((todo, index) => (
          todo.isEditing ? (
              <EditTodoForm editTodo={editTask} task={todo}/>

          ) : (
              <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
          )  
        ))}

        
    </div>
  )
}
