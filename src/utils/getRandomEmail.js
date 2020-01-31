"use strict";

const getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomEmail = () => {
	const chars = "abcdefghijklmnopqrstuvwxyz";
	const accountLength = getRandomInt(4, 10);

	let account = "";

	for (let i = 0; i < accountLength; i++) {
		account += chars[Math.floor(Math.random() * chars.length)];
	}

	return account + "@gmail.com";
};

export default getRandomEmail;
