import Typography from '../../atoms/typography';

import { Content, FunctionImage, FunctionCard } from './styles';

interface Item {
  image: string;
  description: string;
}

interface FunctionsPresenterProps {
  items: Array<Item>;
}

const FunctionsPresenter = ({ items }: FunctionsPresenterProps) => {
  return (
    <Content>
      {items.map((item: Item) => (
        <FunctionCard>
          <FunctionImage src={item.image} alt={item.description} />
          <Typography color='primary'>{item.description}</Typography>
        </FunctionCard>
      ))}
    </Content>
  );
};

export default FunctionsPresenter;
