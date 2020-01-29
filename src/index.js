"use strict";

import "./styles/main.scss";
import Form from "./components/Form";

// TODO log time spent

const EmailsEditor = ({container, ...options}) => {
    console.log(`Render -- [EmailsEditor] -- Render in ${container.id} with options ${JSON.stringify(options)}`);

    const form = Form(options);

    container.append(form);

    console.log(`Render -- [EmailsEditor] -- Finishing rendering`);
};

export default EmailsEditor;