import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #CFCFCF;
    height: 100vh;
`;

const ContainerLogo = styled.img`
    width: 80%;
    align-self: center;
    margin-top: 10%;
    flex: 1;
`;

const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5%;
    margin-top: 20%;
`;

const ContainerForm = styled.div`
    height: 80%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 20px;
    border-radius: 25px;
    align-self: center;
    padding-bottom: 20%;
    margin-bottom: 10%;
`;

const Message = styled.h1`
    font-size: 28px;
    font-weight: bold;
    color: #000;
    align-self: center;
`;

const Login = styled.h2`
    font-size: 20px;
    font-weight: bold;
    color: #3A3A3A;
    align-self: center;
    padding-bottom: 5%;
`;

const Title = styled.h3`
    font-size: 16px;
    font-weight: bold;
    color: #3A3A3A;
    align-self: flex-start;
    padding-bottom: 2%;
    padding-top: 4%;
    padding-left: 10%;
`;

const Input = styled.input`
    width: 90%;
    height: 50px;
    background-color: #FFF;
    border-radius: 25px;
    padding-left: 5%;
    align-self: center;
`;

const Button = styled.button`
    background-color: #2358FF;
    border-radius: 25px;
    width: 90%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: 10%;
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    border: none;
    cursor: pointer;
`;

const ButtonRegister = styled.button`
    margin-top: 10px;
    align-self: center;
    background: none;
    border: none;
    color: #3A3A3A;
    font-size: 16px;
    font-weight: bold;
    padding-top: 2%;
    font-style: italic;
    cursor: pointer;
`;

export {
    Container,
    ContainerLogo,
    ContainerHeader,
    ContainerForm,
    Message,
    Login,
    Title,
    Input,
    Button,
    ButtonRegister
};