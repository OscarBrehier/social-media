import {base} from "../endpoints";

export const verified = async () => {

    const request = await fetch(`${base}/check-verified`, {
        method: 'GET',
        headers: {
            token: localStorage.getItem('user')
        }
    });

    const response = await request.json();

    if(response.message === 'false') return false;
    return true;

}