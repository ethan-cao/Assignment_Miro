"use strict";

import "./styles/main.scss";
import Form from "./components/Form";
import Listener from "./events/Listener";

// TODO log time spent

const EmailsEditor = ({ container, ...options }) => {
	console.log(`Render -- [EmailsEditor] -- Render in ${container.id} with options ${JSON.stringify(options)}`);

	const { form, getEmails, setEmails, subscribe } = Form(options);
    container.append(form);
    
    Listener.listenOn(form, ["click", "keydown", "focusout", "paste"], {setEmails, getEmails});

	console.log(`Render -- [EmailsEditor] -- Finishing rendering`);

	return {
		getEmails,
		setEmails,
		subscribe
	};
};

export default EmailsEditor;