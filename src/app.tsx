import "./styles/style.less";
import ReactDOM from "react-dom";
import React from "react";
import {Application} from "./components/Application";

declare const $VERSION: string;

export function mainRender(element: Element) {
	console.log(`${$VERSION}`);
	ReactDOM.render(<Application/>, element);

}