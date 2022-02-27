import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getCurrentTodoTasksThunk } from "../../../../redux/todoReducer"
import { selectCurrentTodoListId, selectCurrentTodoTasks } from "../../../../redux/todoSelectors"
import CreateTask from "./CreateTaskInput/CreateTaskInput"
import TodoTask from "./TodoTask/TodoTask"
import arrow from "../../../../common/icon/arrow-left.png"
import c from "./TodoTasks.module.css"

const TodoTasks = (props) => {


   const navigate = useNavigate();
   const dispatch = useDispatch();
   const id = useSelector(selectCurrentTodoListId)

   useEffect(() => {
      dispatch(getCurrentTodoTasksThunk(id, 10, 1))
   }, [])

   const todoTasks = useSelector(selectCurrentTodoTasks)

   const tasks = todoTasks.map((item) =>
      <TodoTask title={item.title}
         key={item.id}
         taskId={item.id}
         listId={id}
         description={item.description}
         startDate={item.startDate}
         deadline={item.deadline}
         status={item.status}
         priority={item.priority}
         taskId={item.id}
      />)

   return (
      <div className={c.todoTasks}>
         <div className={c.header}>
            <div className={c.back}>
               <img src={arrow} alt="go Back" onClick={() => navigate('/')} className={c.arrow} />
            </div>
            <div className={c.title}>
               TASKS
            </div>
         </div>
         <div className={c.create}>
            <CreateTask id={id} />
         </div>
         <div className={c.tasks}>
            {tasks}
         </div>
      </div>
   )
}

export default TodoTasks;