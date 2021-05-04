import styled from 'styled-components';

const Layout = styled.li`
  & {
    list-style: none !important;
  }

  .card {
    margin-bottom: 1rem;
    padding: 1rem 1rem 1.5rem;
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.mostDarkestWhite};
    box-shadow: 0 0.5rem 1rem ${props => props.theme.colors.shadow};
    border-radius: 0.5rem;
  }

  .card {
    color: ${props => props.theme.colors.lightInk};
  }

  .card--title {
    color: ${props => props.theme.colors.darkerBlue};
  }

  .card--header a {
    text-decoration: none;
  }

  .card--title > svg {
    transform: rotate(15deg);
    width: 2.2rem;
    height: 2.2rem;
    margin-left: 0.5rem;
  }

  ul,
  li {
    list-style: none !important;
  }

  ul > li {
    margin-top: 1rem;
    display: inline-block;
  }

  .card--tag {
    padding: 0.4rem 0.7rem 0.5rem;
    margin-right: 0.5rem;
    border-radius: 0.5rem;
    background: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.darkerWhite};
  }

  .card--tag-match {
    padding: 0.4rem 0.7rem 0.5rem;
    margin-right: 0.5rem;
    border-radius: 0.5rem;
    background: ${props => props.theme.colors.yellow};
    color: ${props => props.theme.colors.white};
  }

  ul > li > span span:first-child {
    font-size: 1.4rem;
    padding-right: 0.2rem;
  }
`;

export default Layout;
