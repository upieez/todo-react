import React from 'react';

import TodoItem from 'todoitem';

class ItemList extends React.Component {

    render() {
        const todoArr = [this.props.todo];
        console.log(todoArr);
        let todo;
        if (todoArr.length > 0) {
          todo = todoArr.map((list, index) => {
            return <li key={index}> <TodoItem item={list}/> </li>;
          });
        }
        return (
        <div>
        <ul>
            {todo}
        </ul>
        </div>
        );
    }
}

export default ItemList;