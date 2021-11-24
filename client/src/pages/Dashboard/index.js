import {useNavigate} from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem('user');
        return navigate('/');

    }

    return (

        <div>
            Dashboard
            <br/>
            <button onClick={logout}>
                Logout
            </button>
        </div>

    );

};

export default Dashboard;
