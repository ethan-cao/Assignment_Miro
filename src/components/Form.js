"use strict";

import Header from "./Header";
import Editor from "./Editor";
import Footer from "./Footer";
import validateEmail from "../utils/validateEmail";

const CONTAINER_CLASS = "form-container";
const FORM_CLASS = "form";
const FORM_TOP_CLASS = "form__top";
const FORM_BOTTOM_CLASS = "form__bottom";

const Form = ({ ...options }) => {
	console.log(`Build -- [Form] -- start`);

	let boardName = options.boardName;
	let id = boardName.replace(/\s/g, ''); 
	let emails = options.emails;
	let callback = () => {};

	const form = document.createElement("div");
	form.setAttribute("id", id);
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

	const renderEmails = (emails) => {	
		const editor = document.querySelector('#' + id + ' .' + Editor.EDITOR_CLASS);
		editor.innerHTML = Editor.innerTemplate(emails);
	}

	const getEmails = () => emails;

	const setEmails = (newEmails) => {
		newEmails = newEmails.map(email => email.trim());

		emails = [...newEmails];
		renderEmails(emails);
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
	};
};

export default Form;