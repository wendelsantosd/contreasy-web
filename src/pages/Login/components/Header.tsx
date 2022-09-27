import React from 'react';

import logo from '@assets/images/logo.png';

import { Container } from './styles';

export const Header = () => 
  <Container maxWidth={false}>
    <img src={logo} alt='apps logo'/>
  </Container>;