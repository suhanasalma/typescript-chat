import React, { useState } from 'react';
import Register from './Register/Register';
import Login from './Login/Login';
import reg from '../../../assests/auth/reg.svg'
import log from '../../../assests/auth/log.svg'

const Auth = () => {
    let [registerPage, setRegisterPage] = useState(false)
    return (
        <div className='body flex justify-center items-center' style={{

        }}>
            <div className="box">
                <Login registerPage={registerPage} />
                <Register registerPage={registerPage} />
                <div className="switch">
                    <button onClick={() => setRegisterPage(false)} className={`login ${!registerPage && "active"}`}>Login</button>
                    <button onClick={() => setRegisterPage(true)} className={`register ${registerPage && "active"}`}>Register</button>
                </div>
            </div>

        </div>

    );
};

export default Auth;