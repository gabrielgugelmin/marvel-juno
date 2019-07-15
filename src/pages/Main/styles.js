import styled, { keyframes, css } from 'styled-components';

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: center;

  p {
    color: #011638;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
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

const goUp = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-300px);
  }
`;

export const SearchForm = styled.form`
  margin-top: 40px;

  input {
    margin-bottom: 24px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;

    input {
      flex: 2;
      margin-right: 16px;
    }

    button {
      flex: 1;
    }
  }

  ${props =>
    props.animate &&
    css`
      animation: ${goUp} 0.7s forwards 1;
    `}
`;

export const SubmitButton = styled.button.attrs(props => ({
  disabled: props.isLoading || props.search.length === 0,
}))`
  background-color: #3451ff;
`;

export const List = styled.ul`
  display: flex;
  list-style: none;

  .result__item {
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(52, 81, 255, 0.7);
    width: 100%;

    @media (min-width: 768px) {
      width: calc(50% - 8px);

      &:nth-child(2n + 1) {
        margin-right: 16px;
      }
    }
  }

  .result__img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 80px;
    width: 80px;
  }

  .result__content {
    padding: 24px;
  }
`;
