import axios from "axios"


const instance = axios.create({
   baseURL: "https://social-network.samuraijs.com/api/1.1/",
   withCredentials: true,
   headers: { 'API-KEY': '156a73cd-90ed-4d69-8274-cf912f1b9d4d' },
})

export const todoAPI = {
   authMe() {
      return instance.get(`auth/me`)
   },
   login(email, password, rememberMe) {
      return instance.post(`auth/login`, { email, password, rememberMe })
   },
   getTodoLists() {
      return instance.get(`todo-lists`)
   },
   createTodoList(title) {
      return instance.post(`todo-lists`, { title }).then(response => response.data)
   },
   deleteTodoList(id) {
      return instance.delete(`todo-lists/${id}`)
   },
   changeTodoListTitle(id, title) {
      return instance.put(`todo-lists/${id}`, { title })
   },
   getTodoListTasks(id, count = 10, page = 1) {
      return instance.get(`todo-lists/${id}/tasks`, { count, page })
   },
   createTask(id, title, description, completed, status, priority, startDate, deadline) {
      return instance.post(`todo-lists/${id}/tasks`, { title, description, status, completed, priority, startDate, deadline })
   },
   deleteTask(listId, taskId) {
      return instance.delete(`todo-lists/${listId}/tasks/${taskId}`)
   },
   changeTask(listId, taskId, title, description, completed, status, priority, startDate, deadline) {
      return instance.put(`/todo-lists/${listId}/tasks/${taskId}`, { title, description, completed, status, priority, startDate, deadline })
   }
}