import React from 'react';
import { hot } from 'react-hot-loader';

import Form from 'form';

class App extends React.Component {

    render() {
        return (
        <div className="item">
            <Form/>
        </div>
        );
    }
}

export default hot(module)(App);