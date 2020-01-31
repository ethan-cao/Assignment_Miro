"use strict";

import Button from "./Button";
import { ADD, GET_COUNT } from "../events/NameSpace";

const FOOTER_CLASS = "form__footer";

const Footer = () => {
	// console.log(`Build -- [Footer] -- start`);

    const template = `
        <div class=${FOOTER_CLASS}>
            ${Button("Add email", ADD)}
            ${Button("Get emails count", GET_COUNT)}
        </div>
    `;

    // console.log(`Build -- [Footer] -- end`);

    return template;
};

export default Footer;