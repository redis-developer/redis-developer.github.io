import React from 'react';

const Dots = ({ color, ...rest }) => (
	<svg width="47" height="11" xmlns="http://www.w3.org/2000/svg" {...rest}><g fill="none" fillRule="evenodd"><circle fill={color ? color : '#CF5815'} cx="5.5" cy="5.5" r="5.5"/><circle fill={color ? color : '#5961FF'} cx="23.5" cy="5.5" r="5.5"/><circle fill={color ? color : '#14708D'} cx="41.5" cy="5.5" r="5.5"/></g></svg>
);

export default Dots;
