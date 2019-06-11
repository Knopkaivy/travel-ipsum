import React from 'react';

const Image = (props) => {
	return (
		<div className='App-image-container'>
			{/* <picture> */}
			<img src={props.imageURL} alt={props.active} />
			{/* </picture> */}
		</div>
	);
};

export default Image;
