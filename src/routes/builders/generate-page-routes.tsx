import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';

import { NestedRoute } from '../../lib/interfaces/routes.interface';

interface GeneratePageRoutesProps {
  DetailsPage?: React.ComponentType<React.ReactNode>;
  MainPage: React.ComponentType<React.ReactNode>;
  nested?: Array<NestedRoute>;
}

const GeneratePageRoutes = ({
  MainPage,
  DetailsPage,
  nested,
}: GeneratePageRoutesProps) => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}/`} component={MainPage} />
      {DetailsPage && (
        <Route exact path={`${path}/details/:id`} component={DetailsPage} />
      )}
      {nested &&
        nested.map((route, i: number) => (
          <Route
            key={i}
            path={`${path}${route.route}`}
            component={route.Node}
            exact={route.exact ?? false}
          />
        ))}
      <Redirect from='*' to='/404' />
    </Switch>
  );
};

export default GeneratePageRoutes;
