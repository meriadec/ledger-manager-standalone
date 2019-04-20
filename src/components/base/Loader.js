import React from "react";
import styled, { keyframes } from "styled-components";

export default () => (
  <LoaderContainer>
    <LoaderBar />
  </LoaderContainer>
);

const LoaderContainer = styled.div`
  height: 3px;
  width: 100px;
  background: #f0f0f0;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

const anim = keyframes`
  0% {
    transform: translateX(-50%);
  }
  50% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(-50%);
  }
`

const LoaderBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #bbb;
  border-radius: 5px;
  animation: 2s ease ${anim} infinite;
`;
