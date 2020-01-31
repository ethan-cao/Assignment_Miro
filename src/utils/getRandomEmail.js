"use strict";

const getRandomEmail = () => {
    const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    const accountLength = 6;

	let account = "";

	for (let i = 0; i < accountLength; i++) {
		account += chars[Math.floor(Math.random() * chars.length)];
	}

	return account + "@gmail.com";
};

export default getRandomEmail;
