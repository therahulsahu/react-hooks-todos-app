import React from 'react';
import useInputState from './hooks/useInputState';
import { Paper, TextField } from '@mui/material';

function TodoForm({ addTodo }) {
	const [ value, handleChange, reset ] = useInputState('');
	return (
		<Paper>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					addTodo(value);
					reset();
				}}
			>
				<TextField value={value} onChange={handleChange} />
			</form>
		</Paper>
	);
}

export default TodoForm;
