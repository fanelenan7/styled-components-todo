import styled from 'styled-components';

const Submit = styled.input.attrs({
  type: 'submit',
})`
  display: ${props => props.display};
  width: 100%;
  padding: 14px 20px;
  border: none;
  border-radius: 4px;
  background-color: dodgerblue;
  margin-top: 10px;
  color: white;
  transition: 0.2s ease;
  &:hover {
    background: deepskyblue;
  }
`

export default Submit;
