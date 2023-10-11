import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider }  from "./contexts/books";

import App from "./App";


const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
root.render(
    <Provider>
        <App />
    </Provider>
);