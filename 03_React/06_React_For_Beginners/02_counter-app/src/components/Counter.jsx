import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value,
    //     // tags: ['tag1', 'tag2', 'tag3'],
    // };

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    //     return (
    //         <ul>
    //             {this.state.tags.map((tag) => (
    //                 <li key={tag}>{tag}</li>
    //             ))}
    //         </ul>
    //     );
    // }

    // Define a property
    // styles = {
    //     fontSize: "10px",
    //     fontWeight: "bold",
    // };

    // constructor() {
    //     super();
    //     // console.log('Constructor', this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // handleIncrement = (product) => {
    //     console.log(product);
    //     this.setState({ value: this.state.value + 1 });
    // };

    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get new data from the server
        }
    }

    componentWillUnmount() {
        console.log('Counter - Unmount');
    }

    render() {
        console.log('Counter - Rendered');
        // let product = [];
        // console.log('props', this.props);

        return (
            // <React.Fragment>
            <div>
                {/* <h4>{this.props.id}</h4> */}
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
                {/* {this.state.tags.length === 0 && 'Please Create a New Tag'}
                {this.renderTags()} */}
            </div>
            // </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 bg-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}

// const styles2 = {
//     fontSize: "15px",
//     fontWeight: "bold",
// };

export default Counter;
