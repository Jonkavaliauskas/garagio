import React, { useState, useEffect } from 'react'

const FakeProfile = (props) => {
    const [shop, setShop] = useState({});

    const shopURL = "http://localhost:3000/api/v1/shop_owners/";

    const fetchShop = async (id) => {
        fetch(shopURL + id)
            .then(res => res.json())
            .then(res => {
                if (!res) {
                    history.push('/login');
                }
                else {
                    setShop(res);
                }
            });
    }

    useEffect(() => {
        fetchShop(props.location.state.shopOwnerId);
    }, [])

    return (
        <div>
            <h1>Fake Profile</h1>
            <p>Hello, {shop.shop_name}</p>
        </div>
    )
}

export default FakeProfile
