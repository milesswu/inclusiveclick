import React from 'react';
import './ProfLogin.css'

class ProfLogin extends React.Component {
    render() {
        return (
            <div id="parent">

                <div className="Input-Header">
                    <p>username</p>
                </div>
                
                <div className="Input-Header">
                    <p>password</p>
                </div>
            </div>
        );
    }
}

export default ProfLogin;