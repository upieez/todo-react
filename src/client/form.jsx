import React from 'react';

class Form extends React.Component {
    constructor(){
        super()
        this.state = {
            word : "",
            store: []
        }
    }

    changeHandler(event){
        this.setState({word:event.target.value});
    }

    handleClick(){
        this.state.store.push(this.state.word);
        this.props.todo(this.state.store);
        this.setState({store:this.state.store});
    }

    render() {

        return (
        <div className="item">
            <input onChange={(event)=>{this.changeHandler(event);}}/>
            <button onClick={()=>{this.handleClick()}}>Todo</button>
        </div>
        );
    }
}

export default Form;