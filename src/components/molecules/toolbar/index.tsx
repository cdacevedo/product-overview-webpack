import { FC } from 'react';

import { Header, Brand } from './styles';

const Toolbar: FC = () => {
  return (
    <header className='w-100-p py-4'>
      <Brand className='mx-auto w-12 sm:w-14' />
    </header>
  );
};

export default Toolbar;
