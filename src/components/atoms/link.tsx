import {Link as RouterLink, NavLinkProps} from 'react-router-dom'
import {FC, ReactElement} from 'react';
import styled from 'styled-components';

interface LinkProps {
  children: ReactElement<any>;
}

const StyledRouterLink = styled(RouterLink)`
  text-decoration: none;
  color: inherit;
`

const Link: FC<LinkProps & NavLinkProps> = ({ to, children }) => {
  return (
    <StyledRouterLink to={to}>{children}</StyledRouterLink>
  )
}

export default Link