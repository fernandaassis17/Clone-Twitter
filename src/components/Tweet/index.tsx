import React from 'react';

import FotoA from '../../assets/Alan.png';

import Eu from '../../assets/eu.jpg';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  PushIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <PushIcon />
        Pinned Tweet
      </Retweeted>

      <Body>
        <Avatar src={Eu} alt="Eu" />

        <Content>
          <Header>
            <strong>Fernanda</strong>
            <span>@fernandamassis</span>
            <Dot />
            <time>Aug 16</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>Depois de algum tempo fazendo, finalmente terminei a releitura desse emote maravilhoso 😍😍😍</Description>

          <ImageContent src={FotoA} alt="Foto" />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
