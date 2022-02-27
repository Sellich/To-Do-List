import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { getTodoListsThunk } from "../../../redux/todoReducer"
import { selectListLoading } from "../../../redux/todoSelectors"
import TodoInput from "../../TodoInput/TodoInput"
import TodoLists from "../../TodoLists/TodoLists"

const Main = () => {

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getTodoListsThunk());
   }, [])

   const loading = useSelector(selectListLoading)
   return (
      <div>
         <TodoInput />
         {loading ? 'LOADING' : <TodoLists />}
      </div>
   )
}

export default Main;