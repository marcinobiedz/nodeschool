import React, {Component} from "react";
import {List} from "./List";

type ApplicationProps = {}

export class Application extends Component<ApplicationProps> {
    render() {
        return <div>
            <List/>
        </div>;
    }
}