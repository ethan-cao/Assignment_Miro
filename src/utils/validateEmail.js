"use strict";

const cache = new Map();
const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validateEmail = (email) => {
	// console.log("cacheed : ", cache.has(email));

	if (!cache.has(email)) {
		cache.set(email, regex.test(email));
	}

	return cache.get(email);
};

export default validateEmail;