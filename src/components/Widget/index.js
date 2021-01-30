import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  input {
    display: block;
    left: 1px;
    right: 1px;
    top: 1px;
    bottom: 1px;
    background: transparent;
    border: 1px solid #6200EE;
    outline: none;
    border-radius: 3.5px;
    padding: 8px 0 8px 20px;
    width: 285px;
    color: #FFFFFF;
    font-family: Lato;
    font-size: 14px;
    line-height: 24px;
  
    ::-webkit-input-placeholder {
      color: #FFFFFF;
      font-family: Lato;
      line-height: 24px;
    }
  }

  button {
    margin-top: 20px;
    width: 285px;
    height: 36px;
    background: #E91E63;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 4px;
    color: #FFFFFF;
    font-family: Lato;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;
