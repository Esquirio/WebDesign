import React, { useState } from 'react';
import Tweet from './Tweet';
import './App.css';

function App() {
    const [isRed, setRed] = useState(false);
    const [count, setCount] = useState(0);

    const [users, setUsers] = useState([
        { name: 'Fernando', message: 'my first post' },
        { name: 'John', message: 'my lovely summer' },
        { name: 'James', message: 'My name is bond' },
    ]);

    const increment = () => {
        setCount(count + 1);
        setRed(!isRed);
    };

    return (
        <div className="App">
            <h1 className={isRed ? 'red' : ''}>Change my color</h1>

            <div className="showcase">
                {/* <Tweet name="Fernando" message="This is a random tweet" />
                <Tweet name="John Snow" message="You know nothing" />
                <Tweet name="Dev Ed" message="Cool!" /> */}
                <h1>{count}</h1>
                <button onClick={increment}>Increment</button>
            </div>
            <hr />
            <div className="showcase">
                {users.map((user) => (
                    <Tweet name={user.name} message={user.message} />
                ))}
            </div>
        </div>
    );
}

export default App;
