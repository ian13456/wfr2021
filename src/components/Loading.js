import styled, { keyframes } from 'styled-components';

const dots = keyframes`
    0%,
    20% {
      color: rgba(0, 0, 0, 0);
      text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
    }

    40% {
      color: white;
      text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
    }

    60% {
      text-shadow: 0.25em 0 0 white, 0.5em 0 0 rgba(0, 0, 0, 0);
    }

    80%,
    100% {
      text-shadow: 0.25em 0 0 white, 0.5em 0 0 white;
    }
`;

const Loading = styled.span`
  &:after {
    content: '.';
    animation: ${dots} 1s steps(5, end) infinite;
  }
`;

export default Loading;
