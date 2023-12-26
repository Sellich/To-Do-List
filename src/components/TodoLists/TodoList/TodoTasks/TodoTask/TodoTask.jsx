import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import close from "../../../../../common/icon/close.png";
import { deleteTaskThunk, setTaskEditMode } from "../../../../../redux/todoReducer";
import EditTaskForm from "./EditTaskForm/EditTaskForm";
import c from "./TodoTask.module.css";
import cn from "classnames";
import { selectTaskEditMode } from "../../../../../redux/todoSelectors";

const TodoTask = (props) => {
  const dispatch = useDispatch();
  const editMode = useSelector(selectTaskEditMode);

  return (
    <div >
      <div onDoubleClick={() => dispatch(setTaskEditMode(props.taskId))}>
        {editMode === props.taskId ?
          <EditTaskForm taskId={props.taskId} listId={props.listId} description={props.description}
            startDate={props.startDate}
            deadline={props.deadline}
            title={props.title}
            status={props.status}
            priority={props.priority} /> :
          <Task title={props.title}
            key={props.id}
            taskId={props.taskId}
            listId={props.listId}
            description={props.description}
            startDate={props.startDate}
            deadline={props.deadline}
            status={props.status}
            priority={props.priority}
          />}
      </div>

    </div>
  )
}

const Task = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={cn({
      [c.task]: true,

    })}>
      <div >{props.title}</div>
      <div className={c.menu}>
        <div>
          <input type="checkbox" />
        </div>
        <div className={c.img}>
          <img src={close} alt="close" className={c.close} onClick={() => dispatch(deleteTaskThunk(props.listId, props.taskId))} />
        </div>
      </div>
    </div>
  )
}

export default TodoTask;
