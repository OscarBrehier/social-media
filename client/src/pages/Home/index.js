import {Link} from "react-router-dom";

const Home = () => {

    const setLocalItem = () => {

        localStorage.setItem('user', '$2a$10$aeGB15rtMCvfBn.EbC9UX.ks4FbLIqPG1r2tl.kbfBj.a8Ht7klse');

    }

    const readLocalItem = () => {

        let user = localStorage.getItem('user');
        console.log(user);

    }

    const setCookie = () => {


    }

    return (

        <div>
            Home
            <br/>
            <Link to='/login'>Log In</Link>
            <br/>
            <button onClick={setLocalItem}>
                set local item
            </button>
            <button onClick={readLocalItem}>
                read local item
            </button>
            <button onClick={setCookie}>
                set cookie
            </button>
        </div>

    );

};

export default Home;
