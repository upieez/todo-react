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
        this.setState({store:this.state.store});
    }

    render() {
        const todoArr = this.state.store;
        let todo;
        console.log(this.state);
        if (todoArr.length > 0) {
          todo = this.state.store.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          });
        }

        return (
        <div className="item">
            <input onChange={(event)=>{this.changeHandler(event);}}/>
            <button onClick={(event)=>{this.handleClick()}}>click me!</button>
            <br/>
            <ul>
            {todo}
            </ul>
        </div>
        );
    }
}

export default Form;