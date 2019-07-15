import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Back = styled(Link)`
  align-items: center;
  color: #011638;
  display: flex;
  height: 32px;
  justify-content: center;
  left: 15px;
  position: absolute;
  top: 102px;
  width: 32px;

  @media (min-width: 768px) {
    top: 112px;
  }
`;
