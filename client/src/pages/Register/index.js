import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {register} from "../../api/register";

const Register = () => {

    const [fName, setFName] = useState();
    const [lName, setLName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [vPassword, setVPassword] = useState();
    const [error, setError] = useState();

    const navigate = useNavigate();

    const handleSubmit = e => {

        e.preventDefault();
        if(password !== vPassword) return setError('Password do not match');
        register(fName, lName, username, email, password).then(result => {
             
            if(result === true) return navigate('/login');
            return setError('error');

        });

    }

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='first name' onChange={e => setFName(e.target.value)} required/>
                <input type="text" placeholder='last name' onChange={e => setLName(e.target.value)} required/>
                <input type="text" placeholder='username' onChange={e => setUsername(e.target.value)} required/>
                <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)} required/>
                <input type="password" placeholder='password' onChange={e => setPassword(e.target.value)} required/>
                <input type="password" placeholder='password' onChange={e => setVPassword(e.target.value)} required/>
                <button type='submit'>register</button>
            </form>
            { error }
        </div>

    );

};

export default Register
