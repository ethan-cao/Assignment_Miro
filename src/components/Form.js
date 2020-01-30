"use strict";

import Header from "./Header";
import Editor from "./Editor";
import Footer from "./Footer";

const CONTAINER_CLASS = "form-container";
const FORM_CLASS = "form";
const FORM_TOP_CLASS = "form__top";
const FORM_BOTTOM_CLASS = "form__bottom";

const Form = ({ ...options }) => {
	console.log(`Build -- [Form] -- start`);

	let boardName = options.boardName;
	let emails = options.emails;
	let callback = () => {};

	const form = document.createElement("div");
	form.setAttribute("id", boardName);
	form.setAttribute("class", CONTAINER_CLASS);

	const template = `
		<div class=${FORM_CLASS}>	
			<div class=${FORM_TOP_CLASS}>
				${Header(boardName)}
				${Editor(emails)}
			</div>
			<div class=${FORM_BOTTOM_CLASS}>
				${Footer()}
			</div>
		</div>
    `;

	form.innerHTML = template;

	const getEmails = () => emails;

	const setEmails = (newEmails) => {
		emails = [...newEmails];
		// render(emails);
		callback(emails);
	};

	const subscribe = (newCallback) => {
		callback = newCallback;
	}

	console.log(`Build -- [Form] -- end`);

	return {
		form,
		getEmails,
		setEmails,
		subscribe
	}
};

export default Form;