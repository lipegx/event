import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Container,
    Header,
    Title,
    UserContainer,
    UserInfo,
    ButtonsContainer,
    ButtonEdit,
    ButtonDelete,
    ButtonDeleteText,
    List
} from './styles';
import { listUsers, handleDelete } from './user.controller';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const userList = await listUsers();
            setUsers(userList);
        } catch (error) {
            console.error('Erro ao listar usuários:', error);
        }
    };

    const onDeleteSuccess = () => {
        fetchUsers();
    };

    const onDeleteError = () => {
        alert("Erro: Não foi possível excluir o usuário.");
    };

    const deleteUser = (userId) => {
        handleDelete(userId, onDeleteSuccess, onDeleteError);
    };

    return (
        <Container>
            <Header>
                <Title>Lista de Usuários</Title>
            </Header>
            <List>
                {users.map((item) => (
                    <UserContainer key={item.id}>
                        <UserInfo>
                            <p>Nome: {item.name}</p>
                            <p>Login: {item.username}</p>
                            <p>E-mail: {item.email}</p>
                        </UserInfo>
                        <ButtonsContainer>
                            <ButtonEdit
                                onClick={() => history.push(`/editUser/${item.id}`, {
                                    userId: item.id,
                                    currentName: item.name,
                                    currentEmail: item.email,
                                    currentUsername: item.username
                                })}
                            >
                                Editar
                            </ButtonEdit>
                            <ButtonDelete onClick={() => deleteUser(item.id)}>
                                <ButtonDeleteText>Excluir</ButtonDeleteText>
                            </ButtonDelete>
                        </ButtonsContainer>
                    </UserContainer>
                ))}
            </List>
        </Container>
    );
};

export default UserList;