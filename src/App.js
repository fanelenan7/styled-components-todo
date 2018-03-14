import React, { Component } from 'react';

import TodoList from './TodoList';

import Header from './styled/Header';
import Main from './styled/Main';
import Section from './styled/Section';
import Title from './styled/Title';
import Form from './styled/Form';
import TextInput from './styled/TextInput';
import Submit from './styled/Submit';

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
    if (this.state.input) {
      this.setState({
        input: '',
        todos: [...this.state.todos, this.state.input],
      });
    }
  }

  render() {
    return (
      <Main>
        <Header>
          <Title>Todo</Title>
        </Header>
        <Section>
          <Form>
            <TextInput onChange={e => this.handleInput(e)} value={this.state.input} />
            <Submit onClick={e => this.handleSubmit(e)} value="Add Todo" />
          </Form>
          <TodoList todos={this.state.todos} />
        </Section>
      </Main>
    );
  }
}

export default App;
