import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Puff } from 'svg-loaders-react';
import { Container, Section, ButtonLink } from '../../styles/global';
import { Image, Content, Title, Text, Footer, Info } from './styles';
import Back from '../../components/Back';

export default class Detail extends Component {
  static propTypes = {
    location: PropTypes.shape({
      state: PropTypes.shape({
        hero: PropTypes.object,
      }),
    }).isRequired,
  };

  state = {
    name: '',
    description: '',
    thumbnail: '',
    urls: '',
    events: {},
    series: {},
    stories: {},
    loading: true,
  };

  componentDidMount() {
    const {
      name,
      description,
      thumbnail,
      urls,
      events,
      series,
      stories,
    } = this.props.location.state.hero;

    this.setState({
      name,
      description,
      thumbnail,
      urls,
      events,
      series,
      stories,
      loading: false,
    });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return <Puff />;
    }

    const {
      name,
      description,
      thumbnail,
      urls,
      events,
      series,
      stories,
    } = this.state;

    return (
      <Container>
        <Section>
          <Back link={this.props.history.goBack} />
          <Content>
            <Image
              style={{
                backgroundImage: `url(${thumbnail.path}.${thumbnail.extension})`,
              }}
            />
            <Title>{name}</Title>
            <Text>
              {description ||
                'Não há descrição para este herói, mas que tal conferir mais detalhes sobre ele clicando nos links abaixo?'}
            </Text>
            <Info>
              <p>
                <b>Stories:</b> {events.available}
              </p>
              <p>
                <b>Series:</b> {series.available}
              </p>
              <p>
                <b>Stories:</b> {stories.available}
              </p>
            </Info>
            <Footer>
              {urls.map(url => (
                <ButtonLink
                  className="button"
                  to={url.url}
                  key={url.type}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {url.type}
                </ButtonLink>
              ))}
            </Footer>
          </Content>
        </Section>
      </Container>
    );
  }
}
