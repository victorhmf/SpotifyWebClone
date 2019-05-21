import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import './config/reactotron';

import SideBar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';

import { Wrapper, Container, Content } from './styles/components';

import Routes from './routes';

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <GlobalStyle />
      <Container>
        <SideBar />
        <Content>
          <Header />
          <Routes />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </BrowserRouter>
);

export default App;
