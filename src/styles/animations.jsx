/* global tw */
import styled, { keyframes, css } from 'react-emotion';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`;

const upBubblesAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const upDownAnimation = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const upDownWideAnimation = keyframes`
  from {
    transform: translateY(100%);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

export const UpBubblesOneTop = styled.div`
  animation: ${upBubblesAnimation} 5s ease-in infinite;
  ${tw('pin absolute')};
`;

export const UpBubblesTwoTop = styled.div`
  animation: ${upBubblesAnimation} 4s ease-in infinite;
  ${tw('pin absolute')};
`;

export const UpBubblesThreeTop = styled.div`
  animation: ${upBubblesAnimation} 3.5s ease-in infinite;
  ${tw('pin absolute')};
`;

export const UpBubblesOne = styled.div`
  animation: ${upBubblesAnimation} 10s ease-in infinite;
  ${tw('pin absolute')};
`;

export const UpBubblesTwo = styled.div`
  animation: ${upBubblesAnimation} 8s ease-in infinite;
  ${tw('pin absolute')};
`;

export const UpBubblesThree = styled.div`
  animation: ${upBubblesAnimation} 7s ease-in infinite;
  ${tw('pin absolute')};
`;

export const UpDown = styled.div`
  animation: ${upDownAnimation} 11s ease-out infinite;
  ${tw('pin absolute')};
`;

export const UpDownWide = styled.div`
  animation: ${upDownWideAnimation} 28s ease-out infinite;
  ${tw('pin absolute')};
`;

export const waveAnimation = css`
  animation: ${wave} 20s linear infinite alternate;
`;
