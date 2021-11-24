import { Navigate } from "react-router-dom";
import {validate} from "../api/validate";
import {useEffect, useState} from "react";

const RequireAuth = ({ children }) => {

    const [res, setRes] = useState();
    const token = localStorage.getItem('user');

    useEffect(() => {

        if(!token) return setRes(<Navigate to='/login'/>);
        validate(token).then(result => {

            if(result === false) return setRes(<Navigate to='/login'/>);
            return setRes(children);

        })

    }, [children, token])

    return (

        <div>
            <div>

            </div>
            { res }
        </div>

    );

}

export default RequireAuth;