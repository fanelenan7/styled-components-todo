import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Main from './Main';
import Intro from './Intro';
import Title from './Title';

class App extends Component {
  render() {
    return (
      <Main>
        <Header>
          <Title>Todo</Title>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Main>
    );
  }
}

export default App;
