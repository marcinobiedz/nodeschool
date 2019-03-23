import React, {Component} from "react";
import {map} from "lodash";
import {PEOPLES} from "../data/people";

type ListProps = {};

export class List extends Component<ListProps> {
    render(): React.ReactNode {
        return <ul>
            {map(PEOPLES, (name: string) => <li><h1>{name}</h1></li>)}
        </ul>;
    }
}