"use strict";

const BUTTON_PRIMARY_CLASS= "button_primary";
const BUTTON_SECONDARY_CLASS= "button_secondary";

const Button = (label) => {
	console.log(`Build -- [Button] -- start`);

    const template = `
        <button type="button" class=${BUTTON_PRIMARY_CLASS}>
            ${label}
        </button>
    `;

    console.log(`Build -- [Button] -- end`);

    return template;
};

export default Button;