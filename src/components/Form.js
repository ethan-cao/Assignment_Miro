"use strict";

import Header from "./Header";
import Editor from "./Editor";
import Footer from "./Footer";

const CONTAINER_CLASS = "form-container";
const FORM_CLASS = "form";

const Form = ({ ...options }) => {
	console.log(`Build -- [Form] -- start`);

	const boardName = options.boardName;
	const form = document.createElement("div");
	form.setAttribute("id", boardName);
	form.setAttribute("class", CONTAINER_CLASS);

	const template = `
        <div class=${FORM_CLASS}>
            ${Header(boardName)}
            ${Editor()}
            ${Footer()}
        </div>
    `;

	form.innerHTML = template;

	console.log(`Build -- [Form] -- end`);

	return form;
};

export default Form;