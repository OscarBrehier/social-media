import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {profile, verified} from "../../api/paths";
import {VerifyEmail} from "../../components/VerifyEmail";

const Dashboard = () => {

    const [res, setRes] = useState('Loading');
    const [userVerified, setUserVerified] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        profile().then(result => { result === true ? setRes(result) : setRes('Error'); });
        verified().then(result => { result === true ? setUserVerified(true) : setRes(false); });

    }, []);


    const logout = () => {

        localStorage.removeItem('user');
        return navigate('/');

    }

    const home = () => { return navigate('/'); }

    return (

        <div>
            Dashboard
            <br/>
            Welcome { res.Username }
            <br/>
            {
                (userVerified === true)
                ? <div></div> : <VerifyEmail/>
            }
            <button onClick={home}>
                Home
            </button>
            <button onClick={logout}>
                Logout
            </button>
        </div>

    );

};

export default Dashboard;
