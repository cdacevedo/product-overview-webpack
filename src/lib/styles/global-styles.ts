import { createGlobalStyle } from 'styled-components'

import CircularBold from '../../assets/fonts/Circular-Std-Bold.otf';
import CircularBook from '../../assets/fonts/Circular-Std-Book.otf';
import CircularMedium from '../../assets/fonts/Circular-Std-Medium.otf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Circular Std';
    src: url('${CircularMedium}'),
      url('${CircularBold}'),
      url('${CircularBook}');
    font-weight: 300;
    font-style: normal;
  }
  
  body {
    font-family: "Circular Std";
  }
`