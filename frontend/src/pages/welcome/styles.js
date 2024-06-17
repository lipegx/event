import styled, { keyframes } from 'styled-components';

const flipInY = keyframes`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -10deg);
    animation-timing-function: ease-in;
  }

  70% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
  }

  to {
    transform: perspective(400px);
    animation-timing-function: ease-in;
    opacity: 1;
  }
`;

const fadeInUp = keyframes`
  from {
    transform: translate3d(0, 40%, 0);
    opacity: 0;
  }

  to {
    transform: translateZ(0);
    opacity: 1;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #3A3A3A;
`;

export const ContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 100px;
    flex: 2;
`;

export const LogoImage = styled.img`
    width: 100%;
    animation: ${flipInY} 1s;
`;

export const ContainerForm = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background-color: #FFF;
    animation: ${fadeInUp} 0.6s;
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: bold;
    color: #3A3A3A;
`;

export const Text = styled.p`
    font-size: 16px;
    color: #3A3A3A;
`;

export const Button = styled.button`
    position: absolute;
    background-color: #FFF32D;
    border-radius: 50px;
    width: 60%;
    align-self: center;
    padding: 8%;
    bottom: 15%;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
`;

export const ButtonText = styled.span`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
`;