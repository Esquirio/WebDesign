import React, { useState, useEffect } from 'react';

function ItemDetails({ match }) {
    const [item, setItem] = useState({});

    useEffect(() => {
        fetchItem();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchItem = async () => {
        fetch(
            `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
        )
            .then((response) => response.json())
            .then((item) => {
                // console.log('Teste Fetch ID');
                // console.log(item);
                setItem(item);
            });
    };

    // console.log('Teste');
    // console.log(
    //     Object.entries(item).length === 0 ? 'Wait' : item.data.item.name
    // );

    return (
        <div className="uol">
            <h1>Item</h1>
            <div className="shop-list">
                <h3>
                    Name:{' '}
                    {Object.entries(item).length === 0
                        ? 'Loading...'
                        : item.data.item.name}
                </h3>
                <p>
                    Type:{' '}
                    {Object.entries(item).length === 0
                        ? 'Loading...'
                        : item.data.item.type}
                </p>
                <p>
                    Rarity:{' '}
                    {Object.entries(item).length === 0
                        ? 'Loading...'
                        : item.data.item.rarity}
                </p>
            </div>
        </div>
    );
}

export default ItemDetails;
