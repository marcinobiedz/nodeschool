import "./styles/style.less";
import {forEach} from "lodash";
import {createHeader} from "./helpers/dom";
import {Data} from "./helpers/data";

const body = document.querySelector("body");

async function printData() {
    const response = await Data.getData();
    return response;
}

printData().then(resp => {
    forEach(resp, (name: any) => {
        const header = createHeader(name);
        body.appendChild(header);
    });
});