import styled from 'styled-components';

const Layout = styled.div`
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
    padding: 0.75rem 1.25rem;
    border-right: 1px solid ${props => props.theme.colors.mostDarkestWhite};
  }

  .header--title {
    padding: 0.5rem;
  }

  .header--title > * {
    line-height: 80%;
  }

  .header--title > h1 {
    font-size: 2rem;
  }

  .header--left-side {
    padding-right: 1rem;
  }
`;

export default Layout;
