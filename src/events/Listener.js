"use strict";

const EventListener = {
    listenOn : function(element, ...events) {
        events.forEach((event) => {
            console.log(event);

            element.addEventListener(event, () => {
                const nameSpace = event.target.dataset.ns;
                
                console.log(nameSpace);
            })
        } );
    }
};

export default EventListener;