import {FC, ReactElement} from 'react';

import { Content } from './styles'

interface CardProps {
  children: ReactElement<any>;
  hoverable?: boolean;
}

const Card: FC<CardProps> = ({ children, hoverable }) => {
  return (
    <Content hoverable={hoverable}>
      {children}
    </Content>
  )
}

export default Card