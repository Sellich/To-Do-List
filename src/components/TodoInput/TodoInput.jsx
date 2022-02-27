import { useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createTodoList, todoAdd } from "../../redux/todoReducer";
import "./TodoInput.css"


const TodoInput = () => {
   const [todo, setTodo] = useState('')
   const dispatch = useDispatch();
   const { register, handleSubmit } = useForm()

   const onSubmit = (title) => dispatch(createTodoList(title.title))

   const onInputChange = (e) => {
      setTodo(e.target.value)
   }

   return (
      <div>
         <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <input {...register('title')} value={todo} onChange={onInputChange} className='input' />
            <button className='btn'>
               Create ToDoLists
            </button>
         </form>
      </div>
   )
}

export default TodoInput;