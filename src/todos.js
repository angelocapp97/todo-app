import uuidv4 from 'uuid/v4'

let todos = []

// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

todos = getSavedTodos()

// Save todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo by id
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value for a given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo) {
        todo.completed = !todo.completed
    }
}

const getTodos = () => {
    return todos
}

const newTodo = (data) => {
    todos = [...todos, {
        id: uuidv4(),
        text: data.text,
        completed: false
    }]
    saveTodos(todos)
}

export { saveTodos, removeTodo, getTodos, newTodo, toggleTodo }