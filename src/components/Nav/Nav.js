import React from 'react';

const Nav = (props) => {
	return (
		<div className='Nav' onClick={props.click}>
			{props.children}
		</div>
	);
};

export default Nav;
