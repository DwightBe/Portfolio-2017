import styled from 'styled-components';

export const Name = styled.div`
	color: palevioletred;
  font-size: 1.5em;
  font-weight: 900;

  @media (min-width: 768px) {
    font-size: 1.5em;
    height: 50px;
  }

  @media (max-width: 767px) {
      font-size: 1.2em;
      height: 50px;
      line-height: 50px;
  }
  @media (max-width: 480px) {
      font-size: 1em;
      height: 52px;
      line-height: 60px;
  }
  &:hover {
    color: tomato;
  }
`;

export const Title = styled.div`

  @media (min-width: 768px) {
    font-size: 1em;
  }
  @media (max-width: 767px) {
      font-size: 0.6em;
      width: 160px;
      line-height: 12px;
  }
  @media (max-width: 480px) {
      font-size: 0.4em;
      height: 34px;
      width: 100px;
  }

`;
