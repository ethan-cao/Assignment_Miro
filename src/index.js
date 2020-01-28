"use strict";

import Editor from "./components/Editor";

const EmailsEditor = ({container, ...options}) => {
    console.log(`Render -- [EmailsEditor] -- Render in ${container.id} with options ${JSON.stringify(options)}`);


    const editor = Editor(options);
    container.append(editor);

    console.log(`Render -- [EmailsEditor] -- Finishing rendering`);
    // TODO log time spent
};

export default EmailsEditor;