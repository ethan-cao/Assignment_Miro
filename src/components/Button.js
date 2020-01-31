"use strict";

const BUTTON_PRIMARY_CLASS= "button_primary";
const BUTTON_SECONDARY_CLASS= "button_secondary";

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