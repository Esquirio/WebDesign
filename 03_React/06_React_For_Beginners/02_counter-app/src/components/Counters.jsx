import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    render() {
        console.log('Counters - Rendered');
        const { onReset, counters, onDelete, onIncrement } = this.props;
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn bg-primary text-white btn-sm m2"
                >
                    Reset
                </button>
                {counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        // value={counter.value}
                        // id={counter.id}
                        counter={counter}
                        onIncrement={onIncrement}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
