import styled from 'styled-components';

export const Container = styled.div`
	padding: 20px 32px 0px;

	@media (max-width: 480px) {
		padding: 0px 24px 0px;
	}

`;

export const ContentContainer = styled.div`
	padding: 20px 0px;
	text-align: center;

	@media (max-width: 767px) {
		padding: 16px 0px;
	}

	@media (max-width: 480px) {
		padding: 10px 0px;
	}

`;
