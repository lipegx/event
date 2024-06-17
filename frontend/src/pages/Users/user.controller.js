import axios from 'axios';

export const listUsers = async () => {
    try {
        const response = await axios.get('/api/listUsers');
        if (response.data) {
            console.log('Usuários recuperados com sucesso:', response.data);
            return response.data;
        }
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        throw error;
    }
};

export const handleDelete = async (userId, onSuccess, onError) => {
    const confirmDelete = window.confirm("Você tem certeza que deseja excluir este usuário?");
    if (confirmDelete) {
        deleteUser(userId, onSuccess, onError);
    }
};

const deleteUser = async (userId, onSuccess, onError) => {
    try {
        const response = await axios.delete(`/api/listUsers/${userId}`);
        if (response.status === 200) {
            console.log("Usuário excluído com sucesso.");
            onSuccess();
        }
    } catch (error) {
        console.error("Erro ao excluir o usuário:", error);
        onError();
    }
};