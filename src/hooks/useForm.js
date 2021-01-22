import { useState } from 'react';

/*
	Ejemplo de eso del custom hook:

	const initialForm = {
		name: "",
		email: ""
	};
	const [ formValues, handleImputChange, reset ] = useForm(initialForm);
*/

export const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState);

	const reset = (newFormState = initialState) => {
		setValues(newFormState);
	};

	const handleInputChange = ({ target }) => {
		setValues({
			...values,
			[target.name]: target.value,
		});
	};

	return [values, handleInputChange, reset];
};
