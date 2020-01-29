"use strict";

const EDITOR_CLASS = "form__editor";
const INPUT_CLASS = "form__editor__input";
const EMAIL_CLASS = "form__editor__email";

const Editor = () => {
	console.log(`Build -- [Editor] -- start`);

    const template = `
        <div class=${EDITOR_CLASS}>
            <input class=${INPUT_CLASS} type="text" placeholder="add more people...">
        </div>
    `;

    console.log(`Build -- [Editor] -- end`);

    return template;
};

export default Editor;