import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const number = 11;

    const fetchItems = async () => {
        // const data = await
        fetch('https://fortnite-api.theapinetwork.com/items/list')
            .then((response) => response.json())
            .then((items) => {
                // console.log(items.data.slice(1, number));
                setItems(items.data.slice(1, number));
            });
        // const items = await data.json();
        // console.log(items.data);
    };

    return (
        <div className="uol">
            <h1>Shop Page</h1>
            {items.map((item) => (
                <div key={item.itemId} className="shop-list">
                    <Link className="text" to={`/shop/${item.itemId}`}>
                        <h3>{item.item.name}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Shop;
