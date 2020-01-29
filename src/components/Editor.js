"use strict";

const EDITOR_CLASS = "form__editor";

const Editor = () => {
	console.log(`Build -- [Editor] -- start`);

    const template = `
        <div class=${EDITOR_CLASS}>
        </div>
    `;

    console.log(`Build -- [Editor] -- end`);

    return template;
};

export default Editor;