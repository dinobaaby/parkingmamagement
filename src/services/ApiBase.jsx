import axios from "axios";
const request = () => {
    return axios.create({
        baseURL: `https://localhost:4000/api/`,
    });
};

export default request;
