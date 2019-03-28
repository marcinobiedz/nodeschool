import React, {Component} from "react";
import map from "lodash-es/map";

type ListProps = {};
type ListState = {
	names: string[]
}

export class List extends Component<ListProps, ListState> {
	state = {
		names: []
	};

	componentDidMount(): void {
		fetch("http://server:9001")
			.then(function (response) {
				return response.json();
			})
			.then(({response}) => {
				this.setState({
					names: response.map(({forename}) => forename)
				})
			});

	}

	render(): React.ReactNode {
		return <ul>
			{map(this.state.names, (name: string) => <li><h1>{name}</h1></li>)}
		</ul>;
	}
}