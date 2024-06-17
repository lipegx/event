import axios from 'axios';

export const handleRegister = async (name, username, email, password, confirmPassword, history) => {
    try {
        const response = await axios.post('/api/register', {
            name,
            username,
            email,
            password,
            confirmPassword,
        });
        alert('Registered successfully!');
        history.push('/signin');
    } catch (error) {
        console.error(error);
        alert('Registration failed!');
    }
};