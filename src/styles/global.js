import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
    text-decoration: none;
    user-select: none;
  }

  body {
    height: 100vh;
    background-color: rgba(23,23,23,0.98);
  }

  ::root {
    --primary-color: #171717;
    --secondary-color: #FFF;
    --third-color: #E5484A;
  }

  ::-webkit-scrollbar {
      width: 8px;
  }

  ::-webkit-scrollbar-track {
      background-color: #555;
  }

  ::-webkit-scrollbar-thumb {
      background-color: #ddd;
  }
`;
