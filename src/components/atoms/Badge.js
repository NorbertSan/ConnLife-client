import styled from "styled-components";
import theme from "utils/theme";

const Badge = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${theme.colors.error};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  color: ${theme.colors.secondary};
  font-size: ${theme.fontSize.xs};
  font-weight: ${theme.fontWeight.bold};
  left: 10px;
  top: -5px;
  z-index: 999;
`;

export default Badge;
