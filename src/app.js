import {forEach} from "lodash";
import {PEOPLES} from "./components/people";
import {createHeader} from "./helpers/domHelpers";

const body = document.querySelector("body");

forEach(PEOPLES, name => {
    const header = createHeader(name);
    body.appendChild(header);
});