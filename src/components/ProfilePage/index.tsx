import React from 'react';

import Feed from '../Feed';

import Friends from '../../assets/friends.png';

import Eu from '../../assets/eu.jpg';

import {
  Container,
  Banner,
  Banner2,
  Avatar,
  ProfileData,
  CakeIcon,
  CalendarIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner src={Friends} alt="Friends" />
      
      <Banner2>
        <Avatar src={Eu} alt="Eu" />
      </Banner2>
      
      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>

        <h1>Fernanda</h1>
        <h2>@fernandamassis</h2>

        <ul>
          <li>
            <CakeIcon />
            Born February 17, 2002
          </li>

          <li>
            <CalendarIcon/>
            Joined June 2019
          </li>
        </ul>

        <Followage>
          <span>
           <strong>149</strong> Following 
          </span>
          <span>
            <strong>81 </strong> Followers
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
