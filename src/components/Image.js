import React from 'react';
// import { CSSTransition } from 'react-transition-group';
// import '../styles/styles.css';

const Image = (props) => {
	return (
		// <CSSTransition key={props.key} timeout={500} classNames='move'>
		<div
			className='App-image-container'
			style={{ background: `url(${props.imageURL}) bottom center / cover no-repeat` }}
		/>
		// </CSSTransition>
	);
};

export default Image;
