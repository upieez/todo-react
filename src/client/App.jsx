import React from 'react';
import { hot } from 'react-hot-loader';

import Form from 'form';
import ItemList from 'itemlist';

class App extends React.Component {

    constructor(){
    super();
        this.state ={
            store:[]
        }
    }

    setItem(item){
        this.setState({store:item})
    }

    render() {
        const callBack = (item)=>{
        this.setItem(item)
        }
        console.log(this.state.store)
        return (
        <div className="item">
            <Form todo={callBack}/>
            <ItemList todo={this.state.store}/>
        </div>
        );
    }
}

export default hot(module)(App);