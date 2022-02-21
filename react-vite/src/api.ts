import { AxiosInstance } from './../node_modules/axios/index.d';
import  axios  from "axios";

const aI = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

export const api = {
    getPost: async () => {
       let response = await aI.get('/posts');
       return response.data
    },

    addPost: async (title: string, body:string, userId: number) => {
        let response = await aI.post('/posts',{
            title, body, userId
        });
        return response.data;

    }
}