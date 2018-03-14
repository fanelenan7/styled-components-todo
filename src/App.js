import React, { Component } from 'react';

import TodoList from './TodoList';

import Header from './styled/Header';
import Main from './styled/Main';
import Section from './styled/Section';
import Title from './styled/Title';
import Form from './styled/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      todos: [],
    };
  }

  handleInput(e) {
    this.setState({
      input: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      input: '',
      todos: [...this.state.todos, this.state.input],
    })
  }

  render() {
    return (
      <Main>
        <Header>
          <Title>Todo</Title>
        </Header>
        <Section>
          <Form>
            <input type="text" onChange={e => this.handleInput(e)} value={this.state.input} />
            <input type="submit" onClick={e => this.handleSubmit(e)} value="Add Todo" />
          </Form>
          <TodoList todos={this.state.todos} />
        </Section>
      </Main>
    );
  }
}

export default App;
