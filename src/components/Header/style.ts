import styled from 'styled-components';

const Layout = styled.div`
  * {
    user-select: none;
  }

  & {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${props => props.theme.colors.white};
    border-bottom: 1px solid ${props => props.theme.colors.mostDarkestWhite};
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
    padding: 0.75rem 0.75rem;
    border-right: 1px solid ${props => props.theme.colors.mostDarkestWhite};
  }

  .header--logo a > svg {
    width: 4rem;
    height: 4rem;
  }

  .header--title {
    padding: 1rem;
  }

  .header--title > h1 {
    font-size: 2rem;
    line-height: 70%;
  }

  .header--title > span {
    color: ${props => props.theme.colors.lightInk};
    line-height: 50%;
  }

  .header--left-side {
    padding-right: 1.5rem;
  }

  @media screen and (max-width: 1100px) {
    .header--title > span {
      display: none;
    }
  }
`;

export default Layout;
