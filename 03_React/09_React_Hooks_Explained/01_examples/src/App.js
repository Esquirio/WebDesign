import React, {
    // Component,
    useEffect,
    useState,
    useRef,
    useReducer,
    useMemo,
} from 'react';
import './App.css';

// class Btn extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//         };
//     }

//     componentDidMount() {
//         console.log(`Button not clicked yet!`);
//     }
//     componentDidUpdate() {
//         console.log(`Clicked ${this.props.count} times`);
//     }

//     componentWillUnmount() {
//         console.log(`Button destroyed!`);
//     }

//     render() {
//         return <button>BTN</button>;
//     }
// }

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            throw new Error();
    }
}

function App() {
    const [count, setCount] = useState(1);
    const [state, dispatch] = useReducer(reducer, 0);

    const contador = useRef(0);

    const expensiveCount = useMemo(() => {
        return count ** 2;
    }, [count]);

    useEffect(() => alert('Hello side effect'));

    return (
        <div className="App">
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            {/* <Btn /> */}
            <p>{contador.current}</p>
            <button onClick={() => contador.current++}>useRef</button>
            <p>Count: {state}</p>
            <button onClick={() => dispatch({ type: 'decrement' })}>
                Decrement
            </button>
            <button onClick={() => dispatch({ type: 'increment' })}>
                Increment
            </button>
            <p>{expensiveCount}</p>
        </div>
    );
}

export default App;
