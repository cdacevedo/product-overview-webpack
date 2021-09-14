import { Link as RouterLink, NavLinkProps } from 'react-router-dom';
import { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface LinkProps {
  children: ReactElement<any>;
}

const Link: FC<LinkProps & NavLinkProps> = ({ to, children }) => {
  return (
    <RouterLink to={to} className='no-underline text-current'>
      {children}
    </RouterLink>
  );
};

export default Link;
