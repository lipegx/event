import axios from 'axios';

export const handleLogin = async (username, password, history) => {
    if (!username || !password) {
        alert('Erro', 'Preencha todos os campos');
        return;
    }
    try {
        const response = await axios.post('/auth/login', { username, password });
        console.log('Login Success:', response.data);
        history.push('/home');
        const userName = username;
        localStorage.setItem('userName', userName);
        console.log('Nome do usuário salvo!');
    } catch (error) {
        console.error('Login failed:', error);
        alert('Seu login ou senha estão incorretos', 'Tente novamente');
    }
};