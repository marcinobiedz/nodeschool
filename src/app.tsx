import "./styles/style.less";
import ReactDOM from "react-dom";
import React from "react";
import {Application} from "./components/Application";

declare const $VERSION: string;

console.log(`${$VERSION}`);

const body = document.querySelector("#main-div");
ReactDOM.render(<Application/>, body);