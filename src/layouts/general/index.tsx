import { FC } from 'react';

import GeneralRoutes from '../../routes/general.routes';

import Toolbar from '../../components/molecules/toolbar';
import Container from '../../components/atoms/container';
import Divider from '../../components/atoms/divider';

const General: FC = () => {
  return (
    <Container>
      <Toolbar />
      <Divider />
      <GeneralRoutes />
    </Container>
  );
};

export default General;
