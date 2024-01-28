import React, { useState } from 'react';
import Register from './Register/Register';
import Login from './Login/Login';
import reg from '../../../assests/auth/reg.svg'
import log from '../../../assests/auth/log.svg'

const Auth = () => {
    let [registerPage, setRegisterPage] = useState(false)
    return (
        <div className='body' style={{
            background: `url(${registerPage ? reg : log})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            padding: "20px",
        }}>
            <div className="container">
                <div className="box ">
                    <Login />
                    <Register />
                    <div className="switch">
                        <button onClick={() => setRegisterPage(false)} className={`login ${!registerPage && "active"}`}>Login</button>
                        <button onClick={() => setRegisterPage(true)} className={`register ${registerPage && "active"}`}>Register</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Auth;