import styled from 'styled-components';

export const MenuItem = styled.li`
  font-size: 1em;
  cursor: pointer;
  padding: 20px 0px 20px;
  @media (max-width: 767px) {
    font-size: 1em;
    padding: 8px 0px 8px;
  }
  @media (max-width: 480px) {
    font-size: 0.8em;
    padding: 8px 0px 8px;
  }
`;

export const SubMenuItem = styled.li`
  font-size: 1em;
  cursor: pointer;
  padding: 20px 0px 20px;
  @media (max-width: 767px) {
    margin: 10px;
    padding: 8px 0px 8px;
    font-size: 1em;
  }
  @media (max-width: 480px) {
    font-size: 0.8em;
    padding: 8px 0px 8px;
    margin: 10px;
  }
`;
