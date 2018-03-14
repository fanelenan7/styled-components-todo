import styled from 'styled-components';

import Checkbox from './Checkbox';
import CustomCheckbox from './CustomCheckbox';
import Span from './Span';

const Label = styled.label`
  display: flex;
  align-items: center;
  ${Checkbox}:checked ~ ${CustomCheckbox} {
    background-color: dodgerblue;
  }
  ${Checkbox}:checked ~ ${Span} {
    text-decoration: line-through;
    text-decoration-color: dodgerblue;
  }
`

export default Label;
