import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";

import { Home, Login, Register, Dashboard, Verify } from './pages/pages';

function App() {

    const data = true;

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
                    <Route
                        exact
                        path='/verify'
                        element={
                            <RequireAuth email={data}>
                                    <Verify/>
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
