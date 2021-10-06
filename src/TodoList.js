import React from 'react';
import { Paper, List, ListItem, Divider, ListItemText } from '@mui/material';

function TodoList(props) {
	return (
		<Paper>
			<List>
				{props.todos.map((todo) => (
                    <>
					<ListItem>
						<ListItemText>{todo.task}</ListItemText>
					</ListItem>
                    <Divider />
                    </>
				))}
			</List>
		</Paper>
	);
}

export default TodoList;
