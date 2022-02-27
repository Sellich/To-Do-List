export const selectAuth = (state) => {
   return state.auth.authMe
}

export const selectListLoading = (state) => {

   return state.todos.loadingList
}

export const selectTodoLists = (state) => {
   return state.todos.todoLists
}

export const selectListEditMode = (state) => {
   return state.todos.editMode
}

export const selectCurrentTodoTasks = (state) => {
   return state.todos.currentTodoTasks
}

export const selectCurrentTodoListId = (state) => {
   return state.todos.currentTodoListId
}

export const selectTaskEditMode = (state) => {
   return state.todos.editModeTask
}

export const selectUserId = (state) => {
   return state.auth.userId
}