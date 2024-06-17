import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const getEvents = async () => {
    return axios.get(`${API_URL}/events`);
};

const createEvent = async (eventData) => {
    return axios.post(`${API_URL}/events`, eventData);
};

const updateEvent = async (id, eventData) => {
    return axios.put(`${API_URL}/events/${id}`, eventData);
};

const deleteEvent = async (id) => {
    return axios.delete(`${API_URL}/events/${id}`);
};

export default { getEvents, createEvent, updateEvent, deleteEvent };