"use strict";

import Header from "./Header";
import Editor from "./Editor";
import Buttion from "./Button";

const CONTAINER_CLASS = "form-container";
const FORM_CLASS = "form-container";

const Form = ({...options}) => {
    console.log(`Build -- [Editor] -- Build Editor`);
    
    const form = document.createElement("div");
    form.setAttribute("id", options.boardName);
    form.setAttribute("class", CONTAINER_CLASS);

    form.innerHTML = Form.template;

    console.log(`Build -- [Editor] -- Build Editor`);

    return form;
};

Form.template = `
    <div class=${FORM_CLASS}>
        ${Header()}
    </div>
`;

export default Form;
