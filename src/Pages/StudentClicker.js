import React from 'react';
import { Link } from 'react-router-dom';
const getURL = 'https://rocky-badlands-35742.herokuapp.com/professor/class/display'

class Poll extends React.Component {
    render() {
        return (
            <div>
                <p>test</p>
            </div>
        );
    }
}

const throwError = async (resp) => {
    const unknownErr = { errorMessage: 'Unknown error' };
    try {
        const body = await resp.json();
        if (body.message !== undefined) {
            let err = { errorMessage: body.message };
            throw err;
        } else {
            throw unknownErr;
        }
    } catch (e) {
        throw unknownErr;
    }
};

class StudentClicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //classid: "",
            polls: []
        };
    }
    
    componentDidMount() {
        this.loadPolls();
    }

    async loadPolls() {
        const response = await fetch(getURL, {
            method: "POST",
            body: JSON.stringify({
                classid: "cl-sdi3j43"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throwError(response);
        }
        const data = await response.json();
        this.setState({ polls: data.questions });
    }
    
   render() {
        const polls = this.state.polls.map(poll => <Poll {...poll}/>);
        return (
            <div id="parent">
                {polls}
                <Link to="/student-courses"><button>Back</button></Link>
            </div>
        );
    }
}

export default StudentClicker;