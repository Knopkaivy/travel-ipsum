import React from 'react';

const Image = (props) => {
	return (
		<div className='App-image-container'>
			<img src={props.imageURL} alt={props.active} />
		</div>
	);
};

export default Image;
