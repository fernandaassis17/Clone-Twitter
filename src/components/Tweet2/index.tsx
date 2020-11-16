import React from 'react';

import Foto from '../../assets/surface.jpg';

import Eu from '../../assets/eu.jpg';

import {
  Container,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  ImageContent,
  Description,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet2: React.FC = () => {
  return (
    <Container>

      <Body>
        <Avatar src={Eu} alt="Eu" />

        <Content>
          <Header>
            <strong>Fernanda</strong>
            <span>@fernandamassis</span>
            <Dot />
            <time>Aug 02</time>
          </Header>

          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <Description>Fala Dev 🐱‍🏍🐱‍🏍🐱‍🏍</Description>

          <ImageContent src={Foto} alt="Foto" />

          <Icons>
            <Status>
              <CommentIcon />
              5
            </Status>
            <Status>
              <RetweetIcon />
              10
            </Status>
            <Status>
              <LikeIcon />
              80
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet2;
