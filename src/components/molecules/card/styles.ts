import styled, {css} from 'styled-components';

interface ContentProps {
  hoverable?: boolean;
}

export const Content = styled.div<ContentProps>`
  padding: 16px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.gray.main};
  transition: all .3s ease-in-out;
  ${({ hoverable }) => hoverable && css`
    &:hover {
      border-color: ${({ theme }) => theme.colors.gray.hover};
    }
  `}
`