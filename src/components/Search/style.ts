import styled from 'styled-components';

const Layout = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input[type='search'] {
    -moz-appearance: none; /* older firefox */
    -webkit-appearance: none; /* safari, chrome, edge and ie mobile */
    appearance: none; /* rest */
    user-select: auto;
    box-sizing: border-box;
    outline: none;
    background: ${props => props.theme.colors.darkerWhite};
    border: 1px solid ${props => props.theme.colors.mostDarkestWhite};
    border-radius: 0.5rem;
    padding: 0.25rem 1rem;
    position: relative;
  }

  input[type='checkbox']:focus {
    outline: none;
  }

  input[type='checkbox'] {
    -moz-appearance: none; /* older firefox */
    -webkit-appearance: none; /* safari, chrome, edge and ie mobile */
    appearance: none; /* rest */
    border: 1px solid ${props => props.theme.colors.mostDarkestWhite};
    background-color: ${props => props.theme.colors.darkerWhite};
    border-radius: 0.5rem;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 3rem;
    height: 3rem;
    cursor: pointer;
    position: relative;
    margin-left: 1rem;
  }

  input[type='checkbox']:checked {
    background-color: ${props => props.theme.colors.darkerWhite};
    border: 1px solid ${props => props.theme.colors.mostDarkestWhite};
    background: ${props => props.theme.colors.darkerWhite} url('/check.svg')
      0.4rem 0.8rem no-repeat;
    background-size: 2rem;
  }

  input[type='checkbox'] + span {
    margin-left: 0.5rem;
    color: ${props => props.theme.colors.lightInk};
  }

  label {
    display: flex;
    align-items: center;
  }

  label > span {
    position: relative;
    display: inline;
    line-height: 90%;
  }

  label > span:first-child {
    top: 0.2rem;
    left: 2.5rem;
    z-index: 1;
  }

  #search {
    padding-left: 3rem;
    width: 30rem;
    height: 3rem;
  }

  .searchIcon > svg {
    width: 1.6rem;
    height: 1.6rem;
  }

  @media screen and (max-width: 570px) {
    #search {
      width: 18rem;
    }
  }

  @media screen and (max-width: 460px) {
    #search {
      width: 15rem;
    }
  }
`;

export default Layout;
