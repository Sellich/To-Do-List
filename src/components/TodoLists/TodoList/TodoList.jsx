import { selectListEditMode } from "../../../redux/todoSelectors"
import cross from "../../../common/icon/close.png"
import { useDispatch } from "react-redux";
import { deleteTodoList, setCurrentTodoListId, setEditMode } from "../../../redux/todoReducer"
import EditModeInput from "./EditModeInput/EditModeInput";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import c from "./TodoList.module.css"


const TodoList = (props) => {
   const navigate = useNavigate()
   const editMode = useSelector(selectListEditMode)
   const dispatch = useDispatch()

   return (
      <div className={c.todoList_wrapper}>
         <div key={props.id} className={c.todoList} >
            <div onDoubleClick={() => dispatch(setEditMode(props.id))} className={c.titleContainer} onClick={() => {
               dispatch(setCurrentTodoListId(props.id))
               navigate('tasks')
            }}>
               {editMode === props.id ? <EditModeInput id={props.id} /> :
                  <div className={c.title}>{props.title}</div>}
            </div>
            <div className={c.img}>
               <img src={cross} alt="delete" className={c.close} onClick={() => dispatch(deleteTodoList(props.id))} />
            </div>
         </div>

      </div >
   )
}

export default TodoList; 