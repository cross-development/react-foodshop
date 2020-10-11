//Core
import React from 'react';
//Additional components
import BeatLoader from 'react-spinners/BeatLoader';
//Styles
import { css } from '@emotion/core';

const customCss = css`
	display: block;
	margin: 15% auto;
	text-align: center;
`;

const Spinner = () => (
	<BeatLoader size={30} color={'#ffffff'} loading={true} css={customCss} />
);

export default Spinner;
