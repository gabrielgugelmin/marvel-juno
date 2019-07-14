import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { Puff } from 'svg-loaders-react';

import { Container, Title } from '../../styles/global';
import { SearchForm, SubmitButton, Content } from './styles';

import api from '../../services/api';
import authConfig from '../../config/auth';

export default class Main extends Component {
  state = {
    search: '',
    result: [],
    isLoading: false,
    redirect: false,
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
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&apikey=${authConfig.apikey}&hash=${authConfig.hash}&ts=${authConfig.timestamp}`
    );

    this.setState({
      result: response.data.data.results,
      isLoading: false,
      redirect: true,
    });
  };

  render() {
    const { search, isLoading, result, redirect } = this.state;

    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: '/result',
            state: {
              result,
            },
          }}
        />
      );
    }
    return (
      <Container>
        <Content>
          <Title>Encontre seu herói</Title>
          <p>
            Quer saber tudo sobre seu herói preferido?
            <br />
            Aqui você encontrará tudo sobre ele.
          </p>

          <SearchForm onSubmit={this.handleSubmit}>
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
        </Content>
      </Container>
    );
  }
}
