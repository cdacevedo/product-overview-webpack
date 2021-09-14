import { FC } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';

import Products from '../pages/products';

const GeneralRoutes: FC = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}products`} component={Products} />
      <Redirect from='/' to='/products' exact />
    </Switch>
  );
};

export default GeneralRoutes;
