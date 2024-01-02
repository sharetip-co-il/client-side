import { styled, keyframes } from '@mui/system';

const moveCircles = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1200px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
`;

export const GlobalStyles = styled('div')`
  * {
    margin: 0px;
    padding: 0px;
    direction: rtl;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: scroll;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;

export const ContactUs = styled('div')`
  box-shadow: 0 4px 8px 0 rgba(55, 55, 55, 0.2);
  transition: 0.3s;
  text-shadow: 0.5px 0.5px 2px #4f4f4f;
  background: linear-gradient(to bottom, #c4f9f4, #cde3e1);
  position: relative;
  overflow: hidden;
`;

export const Background = styled('div')`
  background: linear-gradient(to bottom, #cde3e1, #c4f9f4);
`;

export const BackgroundContainer = styled('div')`
  width: 100%;
  height: 94vh;
  position: relative;
  overflow: hidden;
`;

export const Context = styled('div')`
  width: 100%;
  position: absolute;
  top: 50vh;
  text-align: center;
`;

export const ContextHeading = styled('h1')`
  text-align: center;
  color: #3a3a3a;
  font-size: 50px;
`;

export const Area = styled('div')`
  background: -webkit-linear-gradient(to left, #90afc7, #4664c8);
  width: 100%;
  height: 94vh;
`;

export const Circles = styled('ul')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Circle = styled('li')`
  position: absolute;
  display: block;
  list-style: none;
  width: ${({ size }) => size || '20px'};
  height: ${({ size }) => size || '20px'};
  background: ${({ background }) => background || 'rgba(38, 1, 203, 0.584)'};
  animation: ${moveCircles} 25s linear infinite;
  bottom: -150px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../data/images/example.png"); /* Replace with your image path */
    background-size: cover;
    background-position: center;
    border-radius: 50%;
  }
`;

// Additional styled components for other circles go here...

export default {
  GlobalStyles,
  ContactUs,
  Background,
  BackgroundContainer,
  Context,
  ContextHeading,
  Area,
  Circles,
  Circle,
};
