import {base} from "../endpoints";

export const verifyCode = async (code) => {

    const data = {
        token: localStorage.getItem('user'),
        code: code
    };
    
    const request = await fetch(`${base}/verify-code`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const response = await request.json();

    if(response.status === 200) return true;
    return false;

}