"use strict";

const HEADER_CLASS = "form__header";

const Header = (boardName) => {
	console.log(`Build -- [Header] -- start`);

    const template = `
        <div class=${HEADER_CLASS}>
            Share <span class="bold-text"> \u00A0 ${boardName} \u00A0 </span> with others
        </div>
    `;

    console.log(`Build -- [Header] -- end`);

    return template;
};

export default Header;