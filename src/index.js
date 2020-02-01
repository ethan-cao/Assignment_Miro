"use strict";

import "./styles/main.scss";
import Form from "./components/Form";
import Listener from "./events/Listener";

/**
 * EmailsEditor render a form based, in which user can type email address.
 *
 * @param {Object} specification - specification used to describe where the form should be rendered and what to be displayed,
 * 								   including name of the board and emails shown in the editor
 * @return {Object} - form object, including the form DOM object and API to get and set emails, as well as to subscribe to changes
 */
const EmailsEditor = ({ container, ...options }) => {
	console.log(`Render -- [EmailsEditor] -- Render in ${container.id} with options ${JSON.stringify(options)}`);

	const start = performance.now();

	const { form, getEmails, setEmails, subscribe } = Form(options);
	container.append(form);

	Listener.listenOn(form, ["click", "keydown", "focusout", "paste"], {setEmails,getEmails});

	const end = performance.now();

	console.log(`Render -- [EmailsEditor] -- Finishing rendering #${options.boardName}# within ${Math.ceil(end - start)} ms`);

	return {
		getEmails,
		setEmails,
		subscribe
	};
};

export default EmailsEditor;