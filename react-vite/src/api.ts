const base = 'https://jsonplaceholder.typicode.com';

export const api = {
    getPost: async () => {
        let response = await fetch(`${base}/posts`);
        let json  = await response.json();
        return json;
    },

    addPost: async (title: string, body:string, userId: number) => {
        let response = await fetch(`${base}/posts`,{
            method: 'POST',
            body: JSON.stringify({title, body, userId}),
            headers :{'Content-Type': 'application/json'}
        });
        let json = await response.json();
        return json;


    }
}