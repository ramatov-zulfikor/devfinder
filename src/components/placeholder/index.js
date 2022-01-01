import React from 'react';
import ContentLoader from 'react-content-loader';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Placeholder = (props) => {
	const windowWidth = useWindowDimensions();

	return (
		<>
			<ContentLoader
				speed={2}
				viewBox={windowWidth < 768 && windowWidth > 575 ? '0 0 650 500' : windowWidth < 575 ? '0 0 650 670' : '0 0 820 385'}
				title="Information about user is loading"
				style={{ width: '100%', height: '100%' }}
				{...props}
			>
				<circle cx="70" cy={windowWidth < 768 ? '55' : '70'} r="55" />
				<rect x={windowWidth < 768 ? '20' : '167'} y={windowWidth < 768 && windowWidth > 575 ? '180' : windowWidth < 575 ? '222' : '60'} rx="5" ry="5" width="188" height="20" />
				<rect
					x={windowWidth < 768 && windowWidth > 575 ? '280' : windowWidth < 575 ? '20' : '425'}
					y={windowWidth < 768 && windowWidth > 575 ? '140' : windowWidth < 575 ? '180' : '20'}
					rx="5"
					ry="5"
					width="370"
					height="25"
				/>
				<rect x={windowWidth < 768 ? '20' : '165'} y={windowWidth < 768 && windowWidth > 575 ? '140' : windowWidth < 575 ? '140' : '20'} rx="5" ry="5" width="205" height="25" />
				<rect x={windowWidth < 768 ? '20' : '166'} y={windowWidth < 768 && windowWidth > 575 ? '220' : windowWidth < 575 ? '260' : '100'} rx="5" ry="5" width="630" height="25" />
				<rect x={windowWidth < 768 ? '20' : '167'} y={windowWidth < 768 && windowWidth > 575 ? '260' : windowWidth < 575 ? '300' : '142'} rx="5" ry="5" width="630" height="132" />
				<rect
					x={windowWidth < 768 ? '20' : '166'}
					y={windowWidth < 768 && windowWidth > 575 ? '420' : windowWidth < 575 ? '460' : '300'}
					rx="5"
					ry="5"
					width={windowWidth < 575 ? '70%' : '240'}
					height="36"
				/>
				<rect
					x={windowWidth < 768 && windowWidth > 575 ? '410' : windowWidth < 575 ? '20' : '555'}
					y={windowWidth < 768 && windowWidth > 575 ? '420' : windowWidth < 575 ? '570' : '300'}
					rx="5"
					ry="5"
					width={windowWidth < 575 ? '80%' : '240'}
					height="36"
				/>
				<rect
					x={windowWidth < 768 && windowWidth > 575 ? '410' : windowWidth < 575 ? '20' : '555'}
					y={windowWidth < 768 && windowWidth > 575 ? '465' : windowWidth < 575 ? '625' : '345'}
					rx="5"
					ry="5"
					width={windowWidth < 575 ? '60%' : '240'}
					height="36"
				/>
				<rect
					x={windowWidth < 768 ? '20' : '168'}
					y={windowWidth < 768 && windowWidth > 575 ? '465' : windowWidth < 575 ? '515' : '345'}
					rx="5"
					ry="5"
					width={windowWidth < 575 ? '90%' : '240'}
					height="36"
				/>
			</ContentLoader>
		</>
	);
};

export default Placeholder;
