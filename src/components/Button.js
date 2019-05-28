import React from 'react';

const Button = (props) => {
	return (
		<button className='Control-btn' onClick={props.click}>
			{props.name}
		</button>
	);
};

export default Button;
