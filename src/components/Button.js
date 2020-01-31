"use strict";

const BUTTON_PRIMARY_CLASS= "button_primary";

const Button = (label, ns) => {
	console.log(`Build -- [Button] -- start`);

    const template = `
        <button type="button" class=${BUTTON_PRIMARY_CLASS} data-ns=${ns}>
            ${label}
        </button>
    `;

    console.log(`Build -- [Button] -- end`);

    return template;
};

export default Button;