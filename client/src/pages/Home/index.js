import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Home = () => {

    const [redirect, setRedirect] = useState('Login')
    const [path, setPath] = useState('/login');

    const navigate = useNavigate();

    const handleClick = () => {
        return navigate(path);
    };

    return (

        <div>
            Home
            <br/>
            <button onClick={handleClick}>{ redirect }</button>
        </div>

    );

};

export default Home;
