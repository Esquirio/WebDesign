import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FaTimes } from 'react-icons/fa'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            backgroundColor: this.props.todo.completed ? '#fff' : '#f4f4f4',
        }
    }

    // markComplete = (e) => {
    //     console.log(this.props);
    // }

    render() {
        // console.log(this.props.todo);
        const { id, title} = this.props.todo;
        return (
            <div style={ this.getStyle() }>
                <p>
                    <input type="checkbox" onChange={this.props.toggleComplete.bind(this, id)} /> {' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}><FaTimes style={faStyle} /></button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.protoTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}



// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

const btnStyle = {
    background: 'red',
    border: 'none',
    padding: '3px 1px 0px 1px',
    borderRadius: '25%',
    cursor: 'pointer',
    float: 'right'
}

const faStyle = {
    color: 'white',
    border: 'none',
    fontSize: '1rem',
}

export default TodoItem

