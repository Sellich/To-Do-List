
import { useSelector } from "react-redux";
import { selectTodoLists } from "../../redux/todoSelectors";
import TodoList from "./TodoList/TodoList"
import "./TodoLists.css"


const TodoLists = () => {

   const todoLists = useSelector(selectTodoLists)



   const todo = todoLists.map((item) =>
      <TodoList title={item.title} id={item.id} key={item.id} />
   )

   return (
      <div className="todo">
         {todo}
      </div>
   )
}

export default TodoLists;