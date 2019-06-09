import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

class Image extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// console.log('image component did mount');
	}

	componentWillUnmount() {
		// console.log('image component will unmount');
	}

	render() {
		return (
			<div
				className='App-image-container'
				style={{ background: `url(${this.props.imageURL}) bottom center / cover no-repeat` }}
			/>
		);
	}
}

export default Image;
