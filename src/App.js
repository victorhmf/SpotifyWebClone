import React from 'react';
import GlobalStyle from './styles/global';

import SideBar from './components/Sidebar';
import Player from './components/Player';

import { Wrapper, Container } from './styles/components';

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      <SideBar />
    </Container>
    <Player />
  </Wrapper>
);

export default App;
