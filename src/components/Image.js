import React, { Component } from 'react';

const Image = (props) => {
	return (
		<div
			className='App-image-container'
			style={{ background: `url(${props.imageURL}) bottom center / cover no-repeat` }}
		/>
	);
};

export default Image;
