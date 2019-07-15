import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Back from '../../components/Back';

import {
  ContainerLarge,
  ButtonLink,
  Title,
  Text,
  Section,
} from '../../styles/global';
import { List, ListItem, ItemTitle } from './styles';

export default class Result extends Component {
  static propTypes = {
    location: PropTypes.shape({
      state: PropTypes.shape({
        result: PropTypes.array,
      }),
    }).isRequired,
  };

  state = {
    result: [],
  };

  componentDidMount() {
    const { location } = this.props;
    const { state } = location;
    const { result } = state;

    this.setState({
      result,
    });

    console.log(this.props);
  }

  render() {
    const { result } = this.state;

    return (
      <ContainerLarge>
        <Section>
          <Back />
          <Title style={{ textAlign: 'center' }}>Resultado</Title>
          {result.length > 0 ? (
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
                    {/* <ButtonLink to={`/hero/${encodeURIComponent(item.name)}`}> */}
                    <ButtonLink
                      to={{
                        pathname: `/hero/${encodeURIComponent(item.name)}`,
                        state: {
                          hero: item,
                        },
                      }}
                    >
                      Ver mais
                    </ButtonLink>
                  </div>
                </ListItem>
              ))}
            </List>
          ) : (
            <Text style={{ textAlign: 'center' }}>
              Ops! Não encontramos resultados para sua busca. :(
            </Text>
          )}
        </Section>
      </ContainerLarge>
    );
  }
}
