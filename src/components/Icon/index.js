import React from 'react';
import Icons from '../../assets/icons/sprite.svg';

function Icon({ name, width, height, color, className }) {
	return (
		<svg width={width} height={height} fill={color} className={className}>
			<use xlinkHref={Icons + `#icon--${name}`} />
		</svg>
	);
}

export default Icon;
