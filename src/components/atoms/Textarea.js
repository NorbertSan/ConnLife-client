import styled from "styled-components";
import theme from "utils/theme";

const Textarea = styled.textarea`
  background: ${theme.colors.tertiary};
  color: ${theme.colors.secondary};
  border-radius: 10px;
  padding: 6px;
  min-height: 80px;
  outline: none;
  &::placeholder {
    color: grey;
  }
`;

export default Textarea;
