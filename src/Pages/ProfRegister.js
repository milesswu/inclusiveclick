import React from 'react';
import '../style/Login-Register.css';

class ProfRegister extends React.Component {
    render() {
        return (
            <div id="parent">
                <p>Register account</p>
                <div id="inputSpace">
                    <div className="Input-Header">
                        <p>Email</p>
                    </div>
                    <form>
                        <input type="text" name="email" placeholder="email" required/>
                    </form>
                    <div className="Input-Header">
                        <p>Username</p>
                    </div>
                    <form>
                        <input type="text" name="username" placeholder="username" required/>
                    </form>
                    <div className="Input-Header">
                        <p>Password</p>
                        <form>
                        <input type="password" name="password" placeholder="password" required/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfRegister;