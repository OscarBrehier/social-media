import {base} from "../endpoints";

export const profile = async () => {

    const request = await fetch(`${base}/profile`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('user')
        }
    });

    const response = await request.json();
    if(response.status === 200) return response;
    return false;

}