import styled from "styled-components";
import theme from "utils/theme";

const SuccessAlert = styled.div`
  color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  background: transparent;
  font-size: ${theme.fontSize.m};
  font-weight: ${theme.fontWeight.bold};
  text-align: center;
  border-radius: 10px;
  padding: 10px;
  margin: 0 15px;
`;
export default SuccessAlert;
