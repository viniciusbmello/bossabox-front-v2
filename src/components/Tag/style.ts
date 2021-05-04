import styled from 'styled-components';

const Layout = styled.li`
  & {
    cursor: pointer;
  }

  .card--tag {
    font-size: 1.4rem;
    padding: 0.4rem 0.7rem 0.5rem;
    margin-right: 0.5rem;
    border-radius: 0.5rem;
    background: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.darkerWhite};
  }

  .card--tag-match {
    background: ${props => props.theme.colors.yellow};
    color: ${props => props.theme.colors.white};
  }

  .card--tag-hashtag:first-child {
    font-size: 1.2rem;
    padding-right: 0.2rem;
  }
`;

export default Layout;
