import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  ContainerLarge,
  ButtonLink,
  Title,
  Section,
} from '../../styles/global';
import { List, ListItem, ItemTitle } from './styles';

export default class Result extends Component {
  state = {
    result: [],
  };

  componentDidMount() {
    const { result } = this.props.location.state;

    this.setState({
      result,
    });

    console.log(result);
  }

  render() {
    const { result } = this.state;
    return (
      <ContainerLarge>
        <Section>
          <Title style={{ textAlign: 'center' }}>Resultado</Title>
          <List>
            {result.map(item => (
              <ListItem key={item.id}>
                <div
                  className="item__img"
                  style={{
                    backgroundImage: `url(${item.thumbnail.path}.${item.thumbnail.extension})`,
                  }}
                />
                <div className="item__text">
                  <ItemTitle>{item.name}</ItemTitle>
                  <p>
                    {item.description
                      ? `${item.description.substring(0, 72)}...`
                      : 'Clique em ver mais para conferir mais detalhes sobre este herói.'}
                  </p>
                  <ButtonLink
                    to={{
                      pathname: '/marvel',
                      state: {
                        oi: 'oi',
                      },
                    }}
                  >
                    Ver mais
                  </ButtonLink>
                </div>
              </ListItem>
            ))}
          </List>
        </Section>
      </ContainerLarge>
    );
  }
}
