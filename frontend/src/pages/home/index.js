import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { 
    Container, 
    ContainerLogo, 
    ContainerForm, 
    Login, 
    Button, 
    ButtonText 
} from './styles';
import { getUserName } from './user.controller';
import logo from '../../../assets/logo.png'; // Update the path as per your structure

const Home = () => {
    const history = useHistory();
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const fetchUserName = async () => {
            const name = await getUserName();
            if (name) {
                setUserName(name);
            }
        };
        fetchUserName();
    }, []);

    return (
        <Container>
            <ContainerLogo src={logo} alt="Logo" />
            <ContainerForm>
                <Login>Bem vindo, {userName}.</Login>
                <Button onClick={() => history.push('/userlist')}>
                    <ButtonText>Listar Usuários</ButtonText>
                </Button>
            </ContainerForm>
        </Container>
    );
};

export default Home;