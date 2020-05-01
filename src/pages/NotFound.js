import React, { useState, useEffect } from "react";
import styled from "styled-components";
import theme from "utils/theme";
import { Redirect } from "react-router-dom";

const StyledWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  font-size: ${theme.fontSize.xxl};
  font-weight: ${theme.fontWeight.bold};
`;

const NotFound = () => {
  const [counter, setCounter] = useState(3);
  useEffect(() => {
    setTimeout(
      () => setCounter((prevState) => setCounter(prevState - 1)),
      1000
    );
  }, [counter]);
  return (
    <StyledWrapper>
      {counter === 0 && <Redirect to="/" />}
      <StyledTitle>URL not found</StyledTitle>
      <h2>
        Redirection <span>{counter}...</span>
      </h2>
    </StyledWrapper>
  );
};

export default NotFound;
