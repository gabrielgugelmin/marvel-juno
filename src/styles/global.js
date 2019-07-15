import styled, { createGlobalStyle, keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/img/bg.jpg';

export default createGlobalStyle`
  * {
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap');
    box-sizing: border-box;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    min-height: 100%;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  button,
  .button {
    align-items: center;
    background-color: #3451ff;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0 8px rgba(52, 81, 255, .7);
    color: #fff;
    cursor: pointer;
    display: flex;
    font-size: 14px;
    font-weight: 600;
    height: 48px;
    justify-content: center;
    position: relative;
    text-decoration: none;
    transition: background-color .25s ease-in-out, box-shadow .3s ease-in-out;
    width: 100%;

    &:hover {
      background-color: #1536ff;
      box-shadow: 0 0 16px rgba(52, 81, 255, .9);
    }

    &:disabled {
      background-color: #7287FF;
      cursor: not-allowed;
    }
  }

  #root {
    background: center/cover url(${backgroundImage});

    &:after {
      background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%);
      content: "";
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      width: 100%;
    }
  }

  input {
    background-color: #fff;
    border-radius: 4px;
    border: none;
    box-shadow: 0 0 8px rgba(1, 22, 56, .16);
    color: #011638;
    font-weight: 500;
    height: 48px;
    padding: 8px 24px;
    transition: box-shadow .25s ease-in-out;
    outline: none;
    width: 100%;

    &::-webkit-input-placeholder {
      color: #BCBCBC;
      font-weight: 500;
    }

    &:hover {
      box-shadow: 0 0 12px rgba(1, 22, 56, .24);
    }

    &:focus {
      box-shadow: 0 0 16px rgba(1, 22, 56, .32);
    }
  }
`;

export const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 344px;
  padding: 0 16px;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    max-width: 592px;
  }
`;

export const ContainerLarge = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 344px;
  padding: 0 16px;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    max-width: 702px;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1)
  }

  to {
    opacity: 0;
    transform: scale(.9);
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

  ${props =>
    props.animate &&
    css`
      animation: ${fadeOut} 0.5s forwards 1;
    `}
`;

export const Text = styled.p`
  color: #011638;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  ${props =>
    props.animate &&
    css`
      animation: ${fadeOut} 0.5s forwards 1;
    `}
`;

export const ButtonLink = styled(Link)`
  align-items: center;
  background-color: #3451ff;
  border-radius: 4px;
  border: none;
  box-shadow: 0 0 8px rgba(52, 81, 255, 0.7);
  color: #fff;
  cursor: pointer;
  display: flex;
  font-size: 12px;
  font-weight: 500;
  height: 32px;
  justify-content: center;
  position: relative;
  text-decoration: none;
  transition: background-color 0.25s ease-in-out, box-shadow 0.3s ease-in-out;
  width: 100%;

  &:hover {
    background-color: #1536ff;
    box-shadow: 0 0 16px rgba(52, 81, 255, 0.9);
  }

  &:disabled {
    background-color: #7287ff;
    cursor: not-allowed;
  }
`;

export const Section = styled.section`
  padding: 100px 0;
`;

export const Back = styled(Link)`
  align-items: center;
  display: flex;
  height: 30px;
  justify-content: center;
  left: 10px;
  position: absolute;
  top: 115px;
  width: 30px;
`;

export const Logo = styled(Link)`
  display: block;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  top: 32px;
  width: 120px;
  z-index: 2;
`;
