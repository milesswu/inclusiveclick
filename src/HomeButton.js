import React from 'react';
import { Link } from 'react-router-dom';
import './style/HomeButton.css';

class HomeButton extends React.Component {
    render() {
        return (
            <div className="Button">
                <Link to='/'>InclusiveClick</Link>
            </div>
        )
    }
}

export default HomeButton;