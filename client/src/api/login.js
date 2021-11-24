import { base } from "./endpoints";

export const login = async (email, password) => {

    const data = {
        email: email,
        password: password
    };

    const request = await fetch(`${base}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const response = await request.json();

    if(response.status === 200) return { response: true, token: response.token };
    return { response: false };

}