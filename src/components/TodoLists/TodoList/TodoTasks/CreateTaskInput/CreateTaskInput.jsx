import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createTask } from "../../../../../redux/todoReducer";
import CreateTaskForm from "./CreateTaskForm/CreateTaskForm";
import c from "./CreateTaskInput.module.css"

const CreateTask = (props) => {

   const dispatch = useDispatch();
   const createTaskMode = useSelector((state) => state.todos.createTask)

   return (

      <div>
         <button onClick={() => dispatch(createTask(true))} className={c.btn}>
            Create Task
         </button>
         {createTaskMode && <CreateTaskForm id={props.id} />}
      </div>
   )
}

export default CreateTask;