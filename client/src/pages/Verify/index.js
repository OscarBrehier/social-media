import {useState, useEffect} from "react";
import {profile, verifyCode} from "../../api/paths";
import {useNavigate} from "react-router-dom";

const Verify = () => {

    const [res, setRes] = useState('loading');
    const [error, setError] = useState();
    const [code, setCode] = useState();
    const navigate = useNavigate();

    useEffect(() => {

        profile().then(result => {

            if(result === false) setRes('Error');
            setRes(result);

        });

    }, []);

    const ValidateCode = e => {

        e.preventDefault();

        // if(code < 6 || code > 6) return setError('Invalid verification code');

        verifyCode(code).then(result => {

            if(result === false) {
                navigate('/verify');
                return setError('Invalid verification code');
            }
            return navigate('/dashboard');

        })

    };

    return (

        <div>
            Enter your 6 digit code that was sent { res.Email }
            <form onSubmit={ValidateCode}>
                <input type="text" placeholder='code' onChange={e => setCode(e.target.value)}/>
                <button type='submit'>submit</button>
            </form>
            { error }
        </div>

    );

}

export default Verify;