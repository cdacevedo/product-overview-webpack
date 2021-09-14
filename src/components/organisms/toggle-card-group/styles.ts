import styled, {css} from 'styled-components';

interface ContentProps {
  orientation?: 'vertical' | 'horizontal';
}

export const Content = styled.div<ContentProps>`
  display: flex;
  ${({ orientation }) => css`
    flex-direction: ${orientation === 'horizontal' ? 'row' : 'column'};
    & > div {
      ${orientation === 'horizontal' ?
        css`
          margin: 0 15px;
          &:first-child {
            margin-left: 0;
          }
          &:last-child {
            margin-right: 0;
          }
        ` : css`
            margin: 15px 0;
            &:first-child {
              margin-top: 0;
            }
            &:last-child {
              margin-bottom: 0;
            }
        `}
      }
  `}
`