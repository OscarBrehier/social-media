import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";

import { Home, Login, Register, Dashboard } from './pages/pages';

function App() {

    return (

        <Router>
            <div className="App">
                <Routes>

                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/login' element={<Login/>}/>
                    <Route exact path='/register' element={<Register/>}/>
                    <Route
                        exact
                        path='/dashboard'
                        element={
                            <RequireAuth>
                                <Dashboard/>
                            </RequireAuth>
                        }
                    />
                    <Route path='*' element={<div>404 - NOT FOUND</div>}/>

                </Routes>
            </div>
        </Router>

    );

}

export default App;
