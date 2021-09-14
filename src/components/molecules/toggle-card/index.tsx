import Typography from '../../atoms/typography';

import { Content } from './styles';

export interface ToggleCardProps {
  title: string;
  description: string;
  price?: number;
}

const ToggleCard = ({ title, description, price }: ToggleCardProps) => {
  return (
    <Content>
      <span>
        <Typography color='primary'>{title}</Typography>
        <Typography>{description}</Typography>
      </span>
      <span>
        {price &&
          `+ ${Intl.NumberFormat('en-us', {
            currency: 'USD',
            style: 'currency',
          }).format(price)}`}
      </span>
    </Content>
  );
};

export default ToggleCard;
