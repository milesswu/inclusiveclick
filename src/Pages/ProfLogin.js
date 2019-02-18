import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Login-Register.css';

class ProfLogin extends React.Component {
    render() {
        return (
            <div id="parent">
                <p>Login</p>
                <div id="inputSpace">
                    <div className="Input-Header">
                        <p>username</p>
                    </div>
                    <form>
                        <input type="text" name="username" placeholder="username" required/>
                    </form>
                    <div className="Input-Header">
                        <p>password</p>
                        <form>
                        <input type="password" name="password" placeholder="password" required/>
                        </form>
                    </div>
                </div>
                <Link to='/prof-courses'><button>Login</button></Link>
            </div>
        );
    }
}

export default ProfLogin;