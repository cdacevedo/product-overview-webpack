import ToggleCard, { ToggleCardProps } from '../../molecules/toggle-card';

import { Content } from './styles';

interface ToggleCardGroupProps {
  items: Array<ToggleCardProps>;
  onChange?: (value: any) => void;
  orientation?: 'vertical' | 'horizontal';
}

const ToggleCardGroup = ({
  items,
  orientation = 'horizontal',
  onChange,
}: ToggleCardGroupProps) => {
  return (
    <Content orientation={orientation}>
      {items.map((card) => (
        <ToggleCard title={card.title} description={card.description} />
      ))}
    </Content>
  );
};

export default ToggleCardGroup;
