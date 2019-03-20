import {NAME} from "./components/people";
import {uniqueId} from "lodash";

const body = document.querySelector("body");
const name = document.createElement("h1");
name.innerText = uniqueId(NAME);

body.appendChild(name);