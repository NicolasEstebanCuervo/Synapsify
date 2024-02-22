import React from "react";
import ReactDOM from "react-dom";
import { Global, css } from "@emotion/react";
import App from "./App";
import ContextAppComponent from "./Context";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const globalStyles = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Plus Jakarta Sans", sans-serif !important;
    }
`;

ReactDOM.render(
    <React.StrictMode>
        <Global styles={globalStyles} />
        <ContextAppComponent>
            <App />
        </ContextAppComponent>
    </React.StrictMode>,
    document.getElementById("root")
);
