import { FC, ReactElement } from 'react';
import clsx from 'clsx';

import { Content } from './styles';

interface CardProps {
  children: ReactElement<any>;
  hoverable?: boolean;
  className?: string;
}

const Card: FC<CardProps> = ({ children, hoverable, className }) => {
  return (
    <div
      className={clsx(
        'p-4 rounded-lg border-2 border-gray-100 transition-all',
        hoverable && 'hover:border-gray-300',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
