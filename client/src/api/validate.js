import {base} from "./endpoints";

export const validate = async (token) => {

    const data = {
        token: token
    };

    const request = await fetch(`${base}/validate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const response = await request.json();

    if(response.status === 200) return true;
    return false;

}