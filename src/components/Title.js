import React, { Component } from 'react';

const TITLES = [
	'a web developer',
	'a music lover',
	'a gamer'
];

class Title extends Component {
	state = { titleIndex: 0 };

	componentDidMount() {
		this.animateTitle();
	}

	animateTitle = () => {
		this.titleInterval = setInterval(() => {
			const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
			this.setState({ titleIndex: titleIndex });
		}, 4000);
	}

	componentWillUnmount() {
		clearInterval(this.titleInterval);
	}

	render() {
		const title = TITLES[this.state.titleIndex];

		return (
			<p className="has-text-centered">I am {title}</p>
		);
	}
}

export default Title;