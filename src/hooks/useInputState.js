import { useState } from 'react';

function useInputState(initialVal) {
	const [ value, setValue ] = useState(initialVal);
	const updateValue = (e) => setValue(e.target.value);
	const resetValue = () => setValue('');
	return [ value, updateValue, resetValue ];
}

export default useInputState;
