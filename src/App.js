import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';

import SideBar from './components/Sidebar';

const App = () => (
  <Fragment>
    <GlobalStyle />
    <SideBar />
  </Fragment>
);

export default App;
