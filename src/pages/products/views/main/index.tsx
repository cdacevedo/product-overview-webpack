import { useEffect, useState } from 'react';

import getProducts from '../../../../api/get-products';

import ProductData from '../../../../lib/interfaces/product.interface';

import Typography from '../../../../components/atoms/typography';
import Card from '../../../../components/molecules/card';
import Link from '../../../../components/atoms/link';

import { Content } from './styles';

const Main = () => {
  const [products, setProducts] = useState<Array<ProductData>>([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Content>
      <Typography as='h1' variant='h1'>
        List of products
      </Typography>
      {products.map((product: ProductData) => (
        <Link to={`/products/details/${product.id}`}>
          <Card hoverable>
            <Typography variant='title'>{product.name}</Typography>
          </Card>
        </Link>
      ))}
    </Content>
  );
};

export default Main;
