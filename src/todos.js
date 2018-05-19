import uuidv4 from 'uuid/v4'

let filters = {
    searchText: '',
    hideCompleted: false
}

// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return []
    }
}

// Save todos to localStorage
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

let todos = getSavedTodos()

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
    todos.push({
        id: uuidv4(),
        text: data.text,
        completed: false
    })
    saveTodos(todos)
}

const getFilters = () => {
    return filters
}

const setFilters = (updates) => {
    if (typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText
        return
    }

    if (typeof updates.hideCompleted === 'boolean') {
        filters.hideCompleted = updates.hideCompleted
        return
    }
}

export { saveTodos, removeTodo, getFilters, setFilters, getTodos, newTodo, toggleTodo }