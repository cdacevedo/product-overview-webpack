import styled, {css} from 'styled-components';

export const Content = styled.div`
  width: 100%;
`

export const Controls = styled.div`
  width: 100%;
  display: flex;
  font-size: 19.2px;
`

export const Tab = styled.div`
  position: relative;
  margin: 0 15px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  color: ${({ theme }) => theme.colors.typography.secondary};
  
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  &::after {
    transition: all .3s ease-in-out;
    content: " ";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -2px;
    left: 0;
  }
  
  &:hover {
    &::after {
      background: ${({ theme }) => theme.colors.typography.secondary};
    }
  }
  
  ${({ active }: { active?: boolean}) => active && css`
    color: ${({ theme }) => theme.colors.typography.primary};
    &::after {
      background: ${({ theme }) => theme.colors.typography.primary};
    }
  `}
`