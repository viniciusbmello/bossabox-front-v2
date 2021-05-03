import styled from 'styled-components';

const Layout = styled.div`
  & {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    padding: 2.5rem 2rem;
  }

  @media screen and (min-width: 1100px) {
    & {
      max-width: 992px;
    }
  }
`;

export default Layout;
