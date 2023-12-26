import { createSlice, current } from "@reduxjs/toolkit";
import { todoAPI } from "../API/API";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todoLists: [],
    loadingList: null,
    loadingTask: null,
    editMode: null,
    currentTodoTasks: [],
    currentTodoListId: '',
    createTask: false,
    editModeTask: null,
  },
  reducers: {
    setTodoLists(state, action) {
      const todoLists = action.payload;
      state.todoLists = todoLists
    },
    isLoadingList(state, action) {
      state.loadingList = action.payload
    },
    isLoadingTask(state, action) {
      state.loadingTask = action.payload
    },
    setEditMode(state, action) {
      state.editMode = action.payload
    },
    setCurrentTodoTasks(state, action) {
      state.currentTodoTasks = action.payload
    },
    setCurrentTodoListId(state, action) {
      state.currentTodoListId = action.payload
    },
    createTask(state, action) {
      state.createTask = action.payload
    },
    setTaskEditMode(state, action) {
      state.editModeTask = action.payload
    }
  },
});

export const getTodoListsThunk = () => async (dispatch) => {
  let response = await todoAPI.getTodoLists();
  dispatch(isLoadingList(true));
  dispatch(setTodoLists(response.data));
  dispatch(isLoadingList(false));
};

export const getCurrentTodoTasksThunk = (id, count, page) => async (dispatch) => {
  let response = await todoAPI.getTodoListTasks(id, count, page);
  dispatch(isLoadingTask(true));
  dispatch(setCurrentTodoTasks(response.data.items));
  dispatch(isLoadingTask(false));
}

export const createTodoList = (title) => async (dispatch) => {
  await todoAPI.createTodoList(title);
  dispatch(getTodoListsThunk());
}

export const deleteTodoList = (id) => async (dispatch) => {
  await todoAPI.deleteTodoList(id);
  dispatch(getTodoListsThunk());
}

export const deleteTaskThunk = (listId, taskId) => async (dispatch) => {
  await todoAPI.deleteTask(listId, taskId);
  dispatch(getCurrentTodoTasksThunk(listId, 10, 1));
}

export const changeTodoListThunk = (id, title) => async (dispatch) => {
  await todoAPI.changeTodoListTitle(id, title);
  dispatch(getTodoListsThunk());
}

export const createTaskThunk = (id, title, description, completed, status, priority, startDate, deadline) => async (dispatch) => {
  await todoAPI.createTask(id, title, description, completed, status, priority, startDate, deadline);
  dispatch(getCurrentTodoTasksThunk(id, 10, 1));
}

export const changeTaskThunk = (listId, taskId, title, description, completed, status, priority, startDate, deadline) => async (dispatch) => {
  await todoAPI.changeTask(listId, taskId, title, description, completed, status, priority, startDate, deadline);
  dispatch(getCurrentTodoTasksThunk(listId, 10, 1));
}

export const { setTodoLists, deleteTodo,
  isLoadingTask, isLoadingList,
  setEditMode, setCurrentTodoTasks,
  setCurrentTodoListId, createTask,
  setTaskEditMode
} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
