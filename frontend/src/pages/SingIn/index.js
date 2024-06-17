import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Container,
    ContainerLogo,
    ContainerHeader,
    ContainerForm,
    Message,
    LoginText,
    Title,
    Input,
    Button,
    ButtonText,
    ButtonRegister,
    RegisterText
} from './styles';
import { handleLogin } from './user.controller';
import logo from '../../../assets/logo.png';

const Login = () => {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const userLogin = () => {
        handleLogin(username, password, history);
    };

    return (
        <Container>
            <ContainerLogo src={logo} alt="Logo" />
            <ContainerHeader>
                <Message>Bem vindo(a)</Message>
            </ContainerHeader>
            <ContainerForm>
                <LoginText>Entre com sua conta</LoginText>
                <Title>Nome de Usuário</Title>
                <Input
                    placeholder="Nome de Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Title>Senha</Title>
                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={userLogin}>
                    <ButtonText>Entrar</ButtonText>
                </Button>
                <ButtonRegister onClick={() => history.push('/register')}>
                    <RegisterText>Não possui uma conta? Cadastre-se</RegisterText>
                </ButtonRegister>
            </ContainerForm>
        </Container>
    );
};

export default Login;