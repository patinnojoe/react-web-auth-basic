import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => (props.variant === 'good' ? 'green' : 'red')};
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  color: ${(props) => (props.variant === 'good' ? 'white' : 'blue')};
  &:hover {
    background-color: grey;
  }
`;

export const FancyButtons = styled(StyledButton)`
  background-image: linear-gradient(to right, #c9bbbbbe 5%, #ccc 100%);
`;
