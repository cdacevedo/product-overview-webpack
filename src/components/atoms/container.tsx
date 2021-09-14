import styled from 'styled-components';

const Container = styled.div.attrs({
  className: 'px-4 mx-auto md:w-4/5',
})`
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 90%;
  }
`;

export default Container;
