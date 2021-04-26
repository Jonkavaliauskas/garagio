import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

const FakeProfile = (props) => {
    const [shop, setShop] = useState({});
    const history = useHistory();
    const shopURL = "http://localhost:3000/api/v1/shop_owners/";

    const fetchShop = async (id) => {
        fetch(shopURL + id)
            .then(res => res.json())
            .then(res => {
                if (res.success == false) {
                    history.push('/login');
                }
                else {
                    setShop(res);
                }
            });
    }

    useEffect(() => {
        if (props.location.state) {
            fetchShop(props.location.state.shopOwnerId);
        }
        else {
            history.push('/login');
        }
            
    }, [])

    return (
        <div>
            <h1>Fake Profile</h1>
            <p>Hello, {shop.shop_name}</p>
        </div>
    )
}

export default FakeProfile
