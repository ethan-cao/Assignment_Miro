"use strict";

import handle from "./Handlers";

const Listener = {
    listenOn: function(element, events, actions) {
        events.forEach((event) => {
            element.addEventListener(event,	(event) => {
                event.stopPropagation();

                const target = event.target;
                const type = event.type;
                const nameSpace = target.dataset.ns;
                
                console.log(`${type} on ${nameSpace}`);
                
                handle(nameSpace, type, target, actions);
            });
        });
    }
};

export default Listener;