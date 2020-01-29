"use strict";

import Button from "./Button";

const FOOTER_CLASS = "form__footer";

const Footer = () => {
	console.log(`Build -- [Footer] -- start`);

    const template = `
        <div class=${FOOTER_CLASS}>
            ${Button("Add email")}
            ${Button("Get emails count")}
        </div>
    `;

    console.log(`Build -- [Footer] -- end`);

    return template;
};

export default Footer;