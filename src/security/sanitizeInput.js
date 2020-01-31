"use strict";

// Escape the following characters with HTML entity encoding to prevent switching into any execution context
const sanitizeInput = (input) => {
	const map = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&#x27;",
		"/": "&#x2F;"
	};

	const regex = /[&<>"'/]/gi;

	return input.replace(regex, (match) => map[match]);
};

export default sanitizeInput;
