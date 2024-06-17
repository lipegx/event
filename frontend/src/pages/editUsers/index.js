import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
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
} from './styles';
import { handleRegister } from './user.controller';
import logo from '../../../assets/logo.png';

const Register = () => {
    const history = useHistory();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const userRegister = () => {
        if (password !== confirmPassword) {
            alert('Erro: As senhas não coincidem');
            return;
        }
        handleRegister(name, username, email, password, confirmPassword, history);
    };

    return (
        <Container>
            <ContainerLogo src={logo} alt="Logo" />
            <ContainerForm>
                <ContainerHeader>
                    <Message>Cadastre-se</Message>
                </ContainerHeader>
                <Login>Crie sua conta</Login>
                <Title>Nome</Title>
                <Input
                    value={name}
                    placeholder="Digite seu nome"
                    onChange={(e) => setName(e.target.value)}
                />
                <Title>Username</Title>
                <Input
                    value={username}
                    placeholder="Digite seu nome de usuário"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Title>Email</Title>
                <Input
                    value={email}
                    placeholder="Digite seu email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Title>Senha</Title>
                <Input
                    type="password"
                    value={password}
                    placeholder="Digite sua senha"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Title>Confirme sua senha</Title>
                <Input
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirme sua senha"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <Button onClick={userRegister}>Cadastrar</Button>
                <ButtonRegister onClick={() => history.push('/signin')}>
                    Já possui uma conta? Entre
                </ButtonRegister>
            </ContainerForm>
        </Container>
    );
};

export default Register;