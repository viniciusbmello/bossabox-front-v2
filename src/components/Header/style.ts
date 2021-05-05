import styled from 'styled-components';

const Layout = styled.div`
  * {
    user-select: none;
  }

  & {
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;

    width: 100%;
    height: 6rem;

    background: ${props => props.theme.colors.white};
    border-bottom: 1px solid ${props => props.theme.colors.mostDarkestWhite};
    box-shadow: 0 0.5rem 1rem ${props => props.theme.colors.shadow};

    z-index: 999;
  }

  div {
    display: flex;
    justify-content: left;
    align-items: center;
  }

  .header--right-side > div {
    display: inline-block;
  }

  .header--logo {
    padding: 0.75rem 1rem;
    border-right: 1px solid ${props => props.theme.colors.mostDarkestWhite};
  }

  .header--logo a > div {
    background: ${props => props.theme.colors.red};
    width: 4rem;
    padding-right: 2rem;
  }

  .header--title {
    padding-left: 1rem;
  }

  .header--title > h1 {
    font-size: 2rem;
    line-height: 90%;
  }

  .header--title > span {
    color: ${props => props.theme.colors.lightInk};
    font-size: 1.4rem;
  }

  .header--left-side {
    padding-right: 2rem;
  }

  @media screen and (max-width: 768px) {
    .header--title > span {
      display: none;
    }
  }
`;

export default Layout;
