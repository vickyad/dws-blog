import styled, { css } from "styled-components";

/* FLEX */
export const FlexRowStyle = css`
  display: flex;
  align-items: center;
`;

export const FlexCenterStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexRowCenterSpaceBetweenStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlexColumnStyle = css`
  display: flex;
  flex-direction: column;
`;

/* BUTTON */
export const TransparentButtonStyle = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
`;
