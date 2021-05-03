import styled from 'styled-components';

const Layout = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input[type='text'] {
    box-sizing: border-box;
    outline: none;
    background: ${props => props.theme.colors.darkerWhite};
    border: 1px solid ${props => props.theme.colors.mostDarkestWhite};
    border-radius: 0.5rem;
    padding: 0.25rem 1rem;
  }
`;

export default Layout;
