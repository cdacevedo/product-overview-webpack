import { Content, CardImage } from './styles'
import {useState} from 'react';

interface CarouselProps {
  defaultValue?: string;
  items: string[];
}

const Carousel = ({ defaultValue, items }: CarouselProps) => {
  const [currentItem, setCurrentItem] = useState(defaultValue)

  return (
    <Content>
      <CardImage>
        <img src={currentItem} alt='Attached image' />
      </CardImage>
      <div>

      </div>
    </Content>
  )
}

export default Carousel