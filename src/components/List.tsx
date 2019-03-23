import React, {Component} from "react";
import {map} from "lodash";
import {Data} from "../data/people";

type ListProps = {};

export class List extends Component<ListProps> {
    render(): React.ReactNode {
        return <ul>
            {map(Data.getData(), (name: string) => <li><h1>{name}</h1></li>)}
        </ul>;
    }
}