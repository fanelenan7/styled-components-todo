import styled from 'styled-components';

import Checkbox from './Checkbox';
import CustomCheckbox from './CustomCheckbox';
import Span from './Span';

const Label = styled.label`
  display: flex;
  align-items: center;
  margin: 10px 0;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #b4b4b4;
  ${Checkbox}:checked ~ ${CustomCheckbox} {
    background-color: dodgerblue;
  }
  ${Checkbox}:checked ~ ${Span} {
    text-decoration: line-through;
    text-decoration-color: dodgerblue;
    color: #b4b4b4;
  }
`

export default Label;
