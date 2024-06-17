import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #CFCFCF;
    height: 100vh;
`;

export const ContainerLogo = styled.img`
    width: 80%;
    align-self: center;
    margin-top: 10%;
`;

export const ContainerForm = styled.div`
    flex: 1;
    background-color: #FFF;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Login = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-bottom: 5%;
`;

export const Button = styled.button`
    background-color: #2358FF;
    border-radius: 10px;
    padding: 15px;
    align-items: center;
    margin-top: 55%;
    border: none;
    cursor: pointer;
`;

export const ButtonText = styled.span`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
`;

export const ButtonRegister = styled.button`
    align-self: center;
    margin-top: 5%;
    background: none;
    border: none;
    color: #A1A1A1;
    font-size: 16px;
    font-style: italic;
    cursor: pointer;
`;