import styled from "styled-components";
import { FlexRowCenterSpaceBetweenStyle } from "../../styles/commonStyles";

export const HeaderStyled = styled.header`
  ${FlexRowCenterSpaceBetweenStyle};
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutrals.extraLight};
  padding: 1.25rem 1rem;

  @media screen and (min-width: 1024px) {
    padding: 1rem 3.5rem;
  }
`;
