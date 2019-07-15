import styled, { keyframes, css } from 'styled-components';

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100%;
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
    transform: translateY(-200px);
  }
`;

export const SearchForm = styled.form`
  margin-top: 40px;

  input {
    margin-bottom: 24px;
  }

  ${props =>
    props.animate &&
    css`
      animation: ${goUp} 0.5s forwards 1;
    `}

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

const reveal = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  position: absolute;
  top: 300px;
  width: calc(100% - 32px);

  ${props =>
    props.animate &&
    css`
      animation: ${reveal} 1s forwards 1;
    `}
`;

const item = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ListItem = styled.li`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(1, 22, 56, 0.16);
  display: flex;
  margin-bottom: 24px;
  min-height: 200px;
  padding: 24px 16px;
  width: 100%;

  ${props =>
    props.animate &&
    css`
      animation: ${item} 1s forwards 1;
    `}

  @media (min-width: 768px) {
    width: calc(50% - 12px);

    &:nth-child(2n + 1) {
      margin-right: 24px;
    }
  }

  .item__img {
    align-self: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 4px;
    box-shadow: 0 0 4px rgba(1, 22, 56, 0.32);
    display: inline-flex;
    flex: 0 0 auto;
    height: 86px;
    margin-right: 16px;
    width: 86px;
  }

  .item__text {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  a {
    margin-top: auto;
  }

  p {
    font-size: 14px;
    color: #858585;
  }
`;

export const ItemTitle = styled.h3`
  color: #011638;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`;
