import axios from "axios";

const API_URL = "http://localhost:5000/api"; // Replace with your backend URL

export const loginUser = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/auth/login`, data);
        return response.data;
    } catch (error) {
        return { success: false, message: error.response?.data?.message || "Error" };
    }
};

export const registerUser = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/auth/signup`, data);
        return response.data;
    } catch (error) {
        return { success: false, message: error.response?.data?.message || "Error" };
    }
};
