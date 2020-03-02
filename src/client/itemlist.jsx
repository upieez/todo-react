import React from 'react';

import TodoItem from 'todoitem';

class ItemList extends React.Component {

    render() {
        const todoArr = this.props.todo;
        console.log(todoArr);
        let todo;
        if (todoArr[0] !== "") {
          todo = todoArr.map((list, index) => {
            return <li key={index}>{list}</li>;
          });
        } else {
            console.log("WE NEVER COME HERE")
            todo = ""
        }
        return (
        <div>
            {todo}
        </div>
        );
    }
}

export default ItemList;