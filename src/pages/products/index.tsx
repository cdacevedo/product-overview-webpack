import { FC } from 'react';

import { GeneratePageRoutes } from '../../routes';

import * as views from './views';

const Products: FC = () => {
  return <GeneratePageRoutes {...views} />;
};

export default Products;
