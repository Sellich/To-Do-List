
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { changeTaskThunk, setTaskEditMode } from "../../../../../../redux/todoReducer";

const EditTaskForm = (props) => {

   const { register, handleSubmit } = useForm();
   const dispatch = useDispatch();
   const onSubmit = (data) => {
      dispatch(changeTaskThunk(props.listId, props.taskId,
         data.title, data.description,
         data.completed, data.status,
         data.priority, data.startDate, data.deadline))
      dispatch(setTaskEditMode(false))
   }

   return (
      <div>
         <form onSubmit={handleSubmit(onSubmit)}>
            <label> Title </label>
            <input {...register('title')} defaultValue={props.title} />
            <label> Description </label>
            <input {...register('description')} defaultValue={props.description} />
            <label> Completed </label>
            <input type="checkbox" {...register('completed')} />
            <label> Status </label>
            <select {...register('status')} defaultValue={props.status}>
               <option value="2"> Active </option>
               <option value="1"> Not active </option>
            </select>
            <label> Priority </label>
            <select {...register('priority')} defaultValue={props.priority}>
               <option value="3">High</option>
               <option value="2">Medium</option>
               <option value="1">Low</option>
            </select>
            <label> Start Date </label>
            <input type="datetime-local" {...register('startDate')} defaultValue={props.startDate} />
            <label> Deadline </label>
            <input type="datetime-local" {...register('deadline')} defaultValue={props.deadline} />
            <input type="submit" />
         </form>
      </div>
   )
}

export default EditTaskForm;