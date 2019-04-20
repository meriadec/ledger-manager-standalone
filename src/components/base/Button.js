// @flow

import styled from "styled-components";

export default styled.button`
  height: 40px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  background: #f0f0f0;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
  border: 1px dashed transparent;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #e9e9e9;
  }

  &:active {
    background: #e5e5e5;
  }

  &:focus {
    border-color: #d5d5d5;
  }
`;
