import { Content, Controls, Tab } from './style';
import { useState } from 'react';
import Typography from '../../atoms/typography';

export interface TabInfo {
  id: string | number;
  title: string;
  content: string;
}

interface TabsProps {
  data: Array<TabInfo>;
  defaultValue?: string | number;
}

const Tabs = ({ data = [], defaultValue }: TabsProps) => {
  const [currentTab, setCurrentTab] = useState(defaultValue);

  const handleChange = (id: string | number) => setCurrentTab(id);

  return (
    <Content>
      <Controls>
        {data.map((value) => (
          <Tab
            active={currentTab === value.id}
            onClick={() => handleChange(value.id)}
          >
            {value.title}
          </Tab>
        ))}
      </Controls>
      <div>
        <Typography size={16}>
          {data.find((value) => value.id === currentTab)?.content ?? ''}
        </Typography>
      </div>
    </Content>
  );
};

export default Tabs;
