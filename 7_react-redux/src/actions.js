const ADD_TODO = 'ADD_TODO'
const FINISH_TODO = 'FINISH_TODO'

let randomTodos = ["Read a book", "Play video games", "Listen to music", "Wash dishes", "Take out garbage", "Drive wife to shopping market", "Go to work", "Collect salary", "Idle"]

const addTodo = () => ({type: ADD_TODO, text: randomTodos[Math.floor(Math.random() * randomTodos.length)]})
const finishTodo = index => ({type: FINISH_TODO, index})

export { addTodo, finishTodo }