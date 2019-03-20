import {uniqueId} from "lodash";

export function createHeader(name) {
    const h1 = document.createElement("h1");
    h1.innerText = uniqueId(name);
    return h1;
}