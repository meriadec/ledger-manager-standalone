// @flow

import styled from "styled-components";
import { color, space } from "styled-system";

export default styled.span`
  ${space};
  ${color};
  display: ${p => (p.inline ? "inline-block" : "block")};
  font-size: ${p => (p.small ? 11 : p.large ? 16 : 13)}px;
  font-weight: ${p => (p.bold ? "bold" : "inherit")};
  font-style: ${p => (p.italic ? "italic" : "inherit")};
  text-transform: ${p => (p.uppercase ? "uppercase" : "")};
  white-space: ${p => (p.noWrap ? "nowrap" : "normal")};
  user-select: ${p => (p.noSelect ? "none" : "inherit")};
`;
