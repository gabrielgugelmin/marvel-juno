import styled, { keyframes, css } from 'styled-components';

export const Image = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(1, 22, 56, 0.32);
  height: 340px;
  margin-bottom: 32px;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #3451ff;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const Text = styled.p`
  color: #011638;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  margin-top: 32px;

  .button {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  margin: 16px 0;

  p {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
