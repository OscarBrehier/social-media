import {useNavigate} from "react-router-dom";

export const VerifyEmail = () => {

    const navigate = useNavigate();
    const verify = () => { return navigate('/verify') }

    return (

        <button onClick={verify}>
            Verify
        </button>

    )

}