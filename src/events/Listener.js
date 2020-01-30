"use strict";

import Handlers from "./Handlers";

const Listener = {
    listenOn : function(element, events, actions) {

        events.forEach((event) => {
            console.log(event);

            element.addEventListener(event, (event) => {

                const target = event.target;
                const type = event.type;
                const nameSpace = target.dataset.ns;
                
                console.log(`${type} on ${nameSpace}`);

                Handlers.handle(nameSpace, type, target, actions);
            })
        } );
    }
};

export default Listener;