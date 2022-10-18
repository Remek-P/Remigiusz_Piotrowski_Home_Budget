import React from "react";
import { createRoot } from "react-dom/client";
import { App} from "./components/App/App";
import "./main.scss"
import "./style.css"

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);