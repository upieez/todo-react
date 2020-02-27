import React from 'react';

class Form extends React.Component {
constructor(){
    super()
    this.state = {
        word : ""
    }
}

changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", event.target.value);
}
    render() {
        return (
        <div className="item">
            {this.state.word}
            <input onChange={(event)=>{this.changeHandler(event);}}/>
        </div>
        );
    }
}

export default Form;