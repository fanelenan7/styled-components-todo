import React, { Component } from 'react';

import Form from './styled/Form';
import Label from './styled/Label';
import Checkbox from './styled/Checkbox';
import CustomCheckbox from './styled/CustomCheckbox';
import Span from './styled/Span';

export default class TodoList extends Component {
  render() {
  const todos = this.props.todos;
  const mappedTodos = todos.map((todo, key) => {
    return (
      <Label key={key} htmlFor={`checkbox-id-${key}`}>
        <Checkbox type="checkbox" id={`checkbox-id-${key}`} value={todo} />
        <CustomCheckbox />
        <Span>{todo}</Span>
      </Label>
    );
  });
    return (
      <Form>
        {mappedTodos}
      </Form>
    );
  };
}
