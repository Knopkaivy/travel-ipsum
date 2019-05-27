import React from 'react';

const NavItem = (props) => {
	return (
		<div className='NavItem' style={props.active ? { color: '#e92800' } : null} onClick={props.click}>
			{props.itemName}
		</div>
	);
};

export default NavItem;
