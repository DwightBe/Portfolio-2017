import styled from 'styled-components';

export const Badge = styled.div`
	font-size: 0.6em;
	position: absolute;
	top: 34px;
	right: 50px;

	@media (max-width: 767px) {
		font-size: 0.5em;
		top: 38px;
	}

	@media (max-width: 480px) {
		font-size: 0.4em;
		top: 24px;
		right: 36px;
	}

`;

export const Logo = styled.img`
		height: 12px;
		position: absolute;
		top: 2px;
		left: -15px;

	@media (max-width: 767px) {
		top: 1px;
		left: -15px;
	}
	@media (max-width: 480px) {
		top: 0px;
	}

`;
