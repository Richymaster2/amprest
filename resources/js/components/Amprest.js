import React from 'react';
import ReactDOM from 'react-dom';
import Tasks from './Tasks'

function Amprest() {
    return (
        <div className="container">
            <h1>Amprest Technologies</h1>
            <Tasks />
        </div>
    );
}

export default Amprest;

if (document.getElementById('amprest')) {
    ReactDOM.render(<Amprest />, document.getElementById('amprest'));
}
