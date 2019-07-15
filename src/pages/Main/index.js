import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Puff } from 'svg-loaders-react';

import { ContainerLarge, Title, ButtonLink, Text } from '../../styles/global';
import {
  SearchForm,
  SubmitButton,
  Content,
  List,
  ListItem,
  ItemTitle,
} from './styles';

import api from '../../services/api';
import authConfig from '../../config/auth';

export default class Main extends Component {
  state = {
    search: '',
    result: [],
    isLoading: false,
    done: false,
  };

  handleInputChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({
      isLoading: true,
    });

    const { search } = this.state;

    const response = await api.get(
      `characters?nameStartsWith=${search}&apikey=${authConfig.apikey}&hash=${authConfig.hash}&ts=${authConfig.timestamp}`
    );

    this.setState({
      result: response.data.data.results,
      isLoading: false,
      done: true,
    });
  };

  render() {
    const { search, isLoading, result, done } = this.state;

    return (
      <ContainerLarge>
        <Content>
          <Title animate={done ? 'animate' : ''}>Encontre seu herói</Title>
          <Text animate={done ? 'animate' : ''}>
            Quer saber tudo sobre seu herói preferido?
            <br />
            Aqui você encontrará tudo sobre ele.
          </Text>

          <SearchForm
            onSubmit={this.handleSubmit}
            animate={done ? 'animate' : ''}
          >
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Nome do herói..."
              value={search}
              onChange={this.handleInputChange}
            />
            <SubmitButton isLoading={isLoading} search={search}>
              {isLoading ? (
                <Puff />
              ) : (
                <>
                  Procurar
                  <FaSearch
                    color="#FFF"
                    size={14}
                    style={{ position: 'absolute', right: '24px' }}
                  />
                </>
              )}
            </SubmitButton>
          </SearchForm>

          {done && (
            <>
              {result.length > 0 ? (
                <List animate={done ? 'animate' : ''}>
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
            </>
          )}
        </Content>
      </ContainerLarge>
    );
  }
}
