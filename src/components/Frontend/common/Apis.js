import axios from 'axios';
console.log(process.env)
export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

console.log(process.env)
export const fetchBlog = async () => {
    try {
        const response = await api.get('blogs/get_all');
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const fetchOneBlog = async (id) => {
    try {
        const response = await api.post(`/blogs/get_one/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const fetchAllProject = async () => {
    try {
        const response = await api.get('/projects/get_all');
        return response.data;
    } catch (error) {
        throw error;
    }
};
export const fetchAllSkill = async () => {
    try {
        const response = await api.get('/skills/get_all');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchAbouts = async () => {
    try {
        const response = await api.get('/abouts/get_all');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const submitContact = async (data) => {
    try {
        const response = await api.post('/contacts/create', data);
        if(response.status === 200) return response.data
    } catch (error) {
        
        throw error;
    }
};
