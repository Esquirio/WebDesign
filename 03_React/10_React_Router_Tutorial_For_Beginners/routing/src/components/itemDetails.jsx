import React, { useState, useEffect } from 'react';

function ItemDetails({ match }) {
    const [item, setItem] = useState({
        data: {
            item: {
                name: null,
                type: null,
                rarity: null,
                images: {
                    icon: null,
                },
            },
        },
    });

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
    // console.log(Object.entries(item).length === 0 ? 'Wait' : item);

    return (
        <div className="uol">
            <h1>Item</h1>
            <div className="shop-list">
                <h3>
                    Name: {item.data.item.name}
                    {/* Name:{' '}
                    {Object.entries(item).length === 0
                        ? 'Loading...'
                        : item.data.item.name} */}
                </h3>
                <p>
                    Type: {item.data.item.type}
                    {/* Type:{' '}
                    {Object.entries(item).length === 0
                        ? 'Loading...'
                        : item.data.item.type} */}
                </p>
                <p>
                    Rarity: {item.data.item.rarity}
                    {/* Rarity:{' '}
                    {Object.entries(item).length === 0
                        ? 'Loading...'
                        : item.data.item.rarity} */}
                </p>
                <img
                    className="images"
                    src={item.data.item.images.icon}
                    alt="Not Found"
                />
            </div>
        </div>
    );
}

export default ItemDetails;
