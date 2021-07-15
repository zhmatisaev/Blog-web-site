import React from 'react';
import './app.less';
import SignUp from "../components/signup/SignUp.jsx";

const App = () => {
    return (
        <div className="app">
            React is working!
            <SignUp/>
        </div>
    );
};

export default App;