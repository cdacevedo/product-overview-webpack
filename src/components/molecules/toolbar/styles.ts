import styled from 'styled-components';

import BrandImage from '../../../assets/images/brand/logo.png'

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 16px 0;
`

export const Brand = styled.img.attrs({
  src: BrandImage
})`
  width: 58px;

  @media(max-width: 320px) {
    width: 50px;
  }
`