import React, { Component } from 'react';

import TodoList from './TodoList';

import Header from './styled/Header';
import Main from './styled/Main';
import Section from './styled/Section';
import Title from './styled/Title';
import Form from './styled/Form';
import TextInput from './styled/TextInput';
import Submit from './styled/Submit';
import Subtitle from './styled/Subtitle';
import Link from './styled/Link';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      todos: [],
      checked: [],
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

  handleCheck(e) {
    if (e.target.checked && !this.state.checked.includes(e.target.value)) {
      this.setState({
        checked: [...this.state.checked, e.target.value],
      })
    }
    if (this.state.checked.includes(e.target.value)) {
      const unchecked = this.state.checked.filter((todos) => {
        return todos !== e.target.value
      })
      this.setState({
        checked: unchecked,
      })
    }
  }

  handleDelete(e) {
    e.preventDefault();
    const newList = this.state.todos.filter(todo => !this.state.checked.includes(todo));
    this.setState({
      todos: newList,
      checked: [],
    })
  }

  render() {
    return (
      <Main>
        <Header>
          <Title>Todos</Title>
          <Subtitle>with &lt; <span role="img" aria-label="Nail Polish Emoji">💅</span> &gt; <Link href="https://www.styled-components.com/">styled-components</Link></Subtitle>
        </Header>
        <Section>
          <Form>
            <TextInput onChange={e => this.handleInput(e)} value={this.state.input} />
            <Submit onClick={e => this.handleSubmit(e)} value="Add Todo" />
          </Form>
          <TodoList
            todos={this.state.todos}
            handleCheck={e => this.handleCheck(e)}
            handleDelete={e => this.handleDelete(e)}
          />
        </Section>
      </Main>
    );
  }
}

export default App;
