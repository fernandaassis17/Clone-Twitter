import React from 'react';

import Tweet from '../Tweet';

import Tweet2 from '../Tweet2';

import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>
      
      <Tweets>
        <Tweet />
        <Tweet2/>
      </Tweets>
    </Container>
  );
};

export default Feed;
