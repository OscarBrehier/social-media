import {useState} from "react";
import {login} from "../../api/paths";
import {Navigate, useNavigate} from "react-router-dom";
import { useEffect} from "react";

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [res, setRes] = useState();

    const navigate = useNavigate();
    const user = localStorage.getItem('user');

    useEffect(() => {

        if(user) setRes(<Navigate to='/'/>);

    }, [user]);


    const handleSubmit = async e => {

        e.preventDefault();
        const checkLogin = await login(email, password);

        if(checkLogin.response === true) {

            localStorage.setItem('user', checkLogin.token);
            return navigate('/dashboard');

        } else {

            setError('Wrong credentials');

        }

    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)} required/>
                <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} required/>
                <button type='submit'>login</button>
            </form>
            { error }
            { res }
        </div>

    );

};

export default Login;
