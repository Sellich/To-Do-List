import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createTask, createTaskThunk } from "../../../../../../redux/todoReducer";
import c from "./CreateTaskForm.module.css";
import close from "../../../../../../common/icon/close.png";

const CreateTaskForm = (props) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(createTaskThunk(
      props.id,
      data.title,
      data.description,
      data.completed,
      data.status, data.priority, data.startDate, data.deadline));
    dispatch(createTask(false));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className={c.form}>
          <div>
            <div className={c.input_close}>
              <div>
                <label>title</label>
                <input {...register('title')} className={c.input} />
              </div>
              <div className={c.close_wrapper}>
                <img src={close} alt="close" className={c.img} onClick={() => dispatch(createTask(false))} />
              </div>
            </div>
            <div>
              <label>description</label>
              <input {...register('description')} className={c.input} />
            </div>
            <div>
              <label> Completed</label>
              <input type="checkbox" {...register('completed')} />
            </div>
          </div>
          <div>
            <div>
              <label>status</label>
              <select {...register('status')}>
                <option value="2"> Active </option>
                <option value="1"> Not Active</option>
              </select>
            </div>
            <div>
              <label>priority</label>
              <select {...register('priority')}>
                <option value="1"> Low </option>
                <option value="2"> Medium</option>
                <option value="3"> High</option>
              </select>
            </div>
          </div>
          <div>
            <div>
              <label>startDate</label>
              <input type="datetime-local" {...register('startDate')} />
            </div>
            <div>
              <label>deadline</label>
              <input type="datetime-local" {...register('deadline')} />
            </div>
          </div>
          <button type='submit' className={c.btn}>
            Create
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTaskForm;
