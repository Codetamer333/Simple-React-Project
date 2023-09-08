import React from 'react';	
import reactDOM from 'react-dom';
import App from './App';
import './style.css'; 

function Page() {
    return (
        <App/>
    )

}

reactDOM.render(<Page/>, document.getElementById('root')); 