import React from 'react';

const Ipsum = (props) => {
	const { ipsum } = props;
	return <div className='Ipsum'>{ipsum.map((par) => <p>{par}</p>)}</div>;
};

export default Ipsum;
