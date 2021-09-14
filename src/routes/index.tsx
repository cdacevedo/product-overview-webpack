import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Route } from 'react-router';
import { FC } from 'react';

import General from '../layouts/general';

const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={General} />
      </Switch>
    </Router>
  );
};

export { default as GeneratePageRoutes } from './builders/generate-page-routes';
export default Routes;
