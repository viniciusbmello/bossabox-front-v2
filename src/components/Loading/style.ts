import styled from 'styled-components';

const Layout = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 50%;
    left: 50%;
  }

  .loading {
    position: relative;
    width: 10rem;
    height: 10rem;
    top: -5rem;
    left: -5rem;
    border-radius: 100%;
    border: 0.2rem solid ${props => props.theme.colors.blue};
    border-bottom-color: ${props => props.theme.colors.transparent};
  }

  .loading.is-animating {
    animation: loading 1s cubic-bezier(0.2, 0.4, 0.8, 0.4) infinite;
  }
  @keyframes loading {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Layout;
