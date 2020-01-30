"use strict";

const Handlers = {
    handle : (ns, type, target, actions) => {
        const eventKey = type + "." + ns; 
        const handler = EventMap[eventKey];

        if( typeof handler !== "function") {
            return;
        }

        handler(target, actions);
    },
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
        emails.push("cao@gmail.com"); 
        actions.setEmails(emails);
    },
    "click.GET": () => {

    }
};

export default Handlers;