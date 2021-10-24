import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8080/api",
    transformRequest: [(data) => JSON.stringify(data)],
    headers: {
        // 'Authorization' : _token,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default API;
