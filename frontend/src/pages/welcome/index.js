import React from 'react';
import { useHistory } from 'react-router-dom';
import {
    Container,
    ContainerLogo,
    ContainerForm,
    Title,
    Text,
    Button,
    ButtonText,
    LogoImage
} from './styles';
import logo from '../../../assets/logo.png'; // Update the path as per your structure

const Welcome = () => {
    const history = useHistory();

    return (
        <Container>
            <ContainerLogo>
                <LogoImage src={logo} alt="Logo" />
            </ContainerLogo>
            <ContainerForm>
                <Title>MUDAH! Agora é o momento!</Title>
                <Text>Faça o login para começar</Text>
                <Button onClick={() => history.push('/signin')}>
                    <ButtonText>Acessar</ButtonText>
                </Button>
            </ContainerForm>
        </Container>
    );
};

export default Welcome;