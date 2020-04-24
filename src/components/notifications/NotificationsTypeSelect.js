import React from "react";
import styled from "styled-components";
import theme from "utils/theme";

const StyledWrapper = styled.div`
  position: relative;
  &:hover {
    opacity: 0.5;
  }
`;
const StyledSelect = styled.select`
  position: absolute;
  top: 10px;
  right: 30px;
  padding: 12px;
  border-radius: 10px;
  background: ${theme.colors.primary};
  border: none;
  color: ${theme.colors.secondary};
  outline: none;
  width: 100px;
  margin: 0 auto;
`;

const NotificationsTypeSelect = ({ changeOption }) => (
  <StyledWrapper>
    <StyledSelect onChange={changeOption}>
      <option value="new">New</option>
      <option value="all">All</option>
    </StyledSelect>
  </StyledWrapper>
);

export default NotificationsTypeSelect;
