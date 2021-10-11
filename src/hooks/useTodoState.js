import useLocalStorageState from './useLocalStorageState';
import { v4 as uuidv4 } from 'uuid';

const useTodoState = (initialTodos) => {
	const [ todos, setTodos ] = useLocalStorageState('todos', initialTodos);
	return {
		todos,
		addTodo: (newTodoText) => {
			setTodos([ ...todos, { id: uuidv4(), task: newTodoText, completed: false } ]);
		},
		removeTodo: (todoId) => {
			const updatedTodos = todos.filter((todo) => todo.id !== todoId);
			setTodos(updatedTodos);
		},
		toggleTodo: (todoId) => {
			const updateTodos = todos.map(
				(todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)
			);
			setTodos(updateTodos);
		},
		editTodo: (todoId, newTask) => {
			const updateTodos = todos.map((todo) => (todo.id === todoId ? { ...todo, task: newTask } : todo));
			setTodos(updateTodos);
		}
	};
};

export default useTodoState;
