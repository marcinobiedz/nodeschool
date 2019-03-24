import uniqueId from "lodash-es/uniqueId";

export function createHeader(name: any) {
    const h1 = document.createElement("h1");
    h1.innerText = uniqueId(name);
    return h1;
}