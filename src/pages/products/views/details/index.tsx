import { useRouteMatch, useHistory } from 'react-router';
import { FC, useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import _ from 'lodash';

import getProduct from '../../../../api/get-product';

import FunctionsPresenter from '../../../../components/molecules/functionsPresenter';
import ToogleCardGroup from '../../../../components/organisms/toggle-card-group';
import Tabs, { TabInfo } from '../../../../components/organisms/tabs';
import Typography from '../../../../components/atoms/typography';
import Spacing from '../../../../components/atoms/spacing';

import ProductData from '../../../../lib/interfaces/product.interface';

import {
  Content,
  CarouselContainer,
  InfoContainer,
  PriceContainer,
} from './styles';

const Details: FC = () => {
  const { params } = useRouteMatch<{ id: string }>();
  const history = useHistory();
  const theme: any = useTheme();

  const [product, setProduct] = useState<ProductData>();
  const [informationTabs, setInformationTabs] = useState<Array<TabInfo>>([]);

  useEffect(() => {
    getProduct(params.id)
      .then((data) => {
        if (data) {
          setProduct(data);
          setInformationTabs(
            _.map(data.information, (element: any, key: string) => {
              const titles = {
                overview: 'Overview',
                features: 'Features',
                whats_box: "What's in the box?",
              };
              return {
                id: key,
                title: titles[key as keyof typeof titles],
                content: element,
              };
            })
          );
        } else {
          history.push('/products');
        }
      })
      .catch((error) => console.error(error.toString()));
  }, [params.id, history]);

  return (
    <Content>
      <CarouselContainer>
        <FunctionsPresenter items={product?.functions ?? []} />
      </CarouselContainer>
      <InfoContainer>
        {product?.new && (
          <Typography variant='caption' color={theme.colors.alerts.error}>
            new release
          </Typography>
        )}
        <Typography as='h1' variant='h1'>
          {product?.name}
        </Typography>
        <Typography as='h3' variant='h2'>
          {product?.description}
        </Typography>
        <PriceContainer>
          <Typography variant='caption' color='secondary'>
            Starting at
          </Typography>
          <Typography as='h3' variant='h1'>
            {Intl.NumberFormat(['en-us'], {
              currency: 'USD',
              style: 'currency',
            }).format(product?.price ?? 0)}
          </Typography>
        </PriceContainer>
        <Spacing mb={60}>
          <Tabs data={informationTabs} defaultValue='overview' />
        </Spacing>

        <Typography variant='h1' size={19.2}>
          Choose your finish.
        </Typography>
        <Spacing my={20}>
          <ToogleCardGroup items={product?.colors ?? []} />
        </Spacing>
      </InfoContainer>
    </Content>
  );
};

export default Details;
