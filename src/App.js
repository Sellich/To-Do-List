
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/Login';
import Content from './components/Content/Content';
import TodoHeader from './components/TodoHeader/TodoHeader';
import { authMeThunk } from './redux/authReducer';
import TodoTasks from './components/TodoLists/TodoList/TodoTasks/TodoTasks';


function App() {

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(authMeThunk())
   }, [])

   return (
      <div className='app'>
         <header className='header'>
            <TodoHeader />
         </header>
         <main className="main">
            <Routes>
               <Route path='/' element={<Content />} />
               <Route path='/login' element={<Login />} />
               <Route path='/tasks' element={<TodoTasks />} />
            </Routes>
         </main>
      </div>
   );
}

export default App;
