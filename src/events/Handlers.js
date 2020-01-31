"use strict";

import { ENTER, COMMA } from "./Keys";
import getRandomEmail from "../utils/getRandomEmail";
import validateEmail from "../utils/validateEmail";

const handle = function(ns, type, target, actions) {
    const eventKey = type + "." + ns;
    const handler = EventMap[eventKey];

    if (typeof handler !== "function") {
        return;
    }

    handler(target, actions, event);
};

const EventMap = {
	"click.REMOVE": (target, actions) => {
		const idx = target.parentNode.dataset.key;
		const emails = actions.getEmails();
		emails.splice(idx, 1);
        actions.setEmails(emails);

	},
	"click.ADD": (target, actions) => {
		const emails = actions.getEmails();
		const newEmail = getRandomEmail();
		emails.push(newEmail);
        actions.setEmails(emails);
	},
	"click.GET_COUNT": (target, actions, event) => {
		let count = 0;

		const emails = actions.getEmails();
		emails.forEach( email => {
			if (validateEmail(email)){
				count++;
			}
		});

		alert("Valid emails count : " + count);
    },
	"keydown.RECORD": (target, actions, event) => {
		const key = event.which || event.keyCode;

		if (key !== ENTER && key !== COMMA) {
			return;
		}

		const newEmail = target.value;
		target.value = "";
        
		// security check
		
		if (newEmail === null || newEmail === undefined || newEmail === "") {
			return;
		}

		const emails = actions.getEmails();
		emails.push(newEmail);
        actions.setEmails(emails);

	},
	"focusout.RECORD": (target, actions, event) => {
		const newEmail = target.value;
		target.value = "";
        
		// security check
		
		if (newEmail === null || newEmail === undefined || newEmail === "") {
			return;
		}

		const emails = actions.getEmails();
		emails.push(newEmail);
        actions.setEmails(emails);
        
	}
};

export default handle;