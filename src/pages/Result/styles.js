import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
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
