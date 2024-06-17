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

export const ContainerHeader = styled.div`
    margin-bottom: 15%;
    margin-top: 5%;
    padding-left: 5%;
`;

export const Message = styled.h1`
    font-size: 28px;
    font-weight: bold;
    color: #000;
`;

export const ContainerForm = styled.div`
    flex: 1;
    background-color: #FFF;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 10%;
    display: flex;
    flex-direction: column;
`;

export const LoginText = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color: #000;
    margin-bottom: 5%;
`;

export const Title = styled.h3`
    font-size: 18px;
    color: #000;
    margin-top: 8%;
    margin-bottom: 5%;
`;

export const Input = styled.input`
    border-width: 1px;
    border-color: #000;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 1%;
    align-items: center;
`;

export const Button = styled.button`
    background-color: #2358FF;
    border-radius: 5px;
    padding: 15px;
    align-items: center;
    margin-top: 15%;
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

export const RegisterText = styled.span`
    color: #A1A1A1;
    font-size: 16px;
    font-style: italic;
`;