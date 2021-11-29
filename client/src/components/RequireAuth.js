import { Navigate } from "react-router-dom";
import {validate} from "../api/paths";
import {useEffect, useState} from "react";

const RequireAuth = ({ children, email }) => {

    const [res, setRes] = useState();

    useEffect(() => {

        if(!localStorage.getItem('user')) {
            localStorage.removeItem('user');
            return setRes(<Navigate to='/login'/>)
        }

        validate().then(result => {

            if(result === false) return setRes(<Navigate to='/login'/>);
            return setRes(children);

        })

    }, [children]);

    return (

        <div>
            <div>

            </div>
            { res }
        </div>

    );

}

export default RequireAuth;