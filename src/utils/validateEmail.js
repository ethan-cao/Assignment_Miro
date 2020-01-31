"use strict";

// TODO memorise to improve performance 

const validateEmail = (email) => {
	const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	// console.log(`validate:${email}--`, regex.test(email));
	return regex.test(email);
};

export default validateEmail;