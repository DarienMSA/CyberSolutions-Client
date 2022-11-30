import axios from "axios";

export const axiosBase = axios.create({
    baseURL: "https://cybersolutions-api.herokuapp.com/api"
})