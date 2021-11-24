import { base } from "./endpoints";

export const register = async (firstName, lastName, username, email, password) => {

    const data = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password
    };

    const request = await fetch(`${base}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const response = await request.json();

    if(response.status === 201) return true;
    return false;

}