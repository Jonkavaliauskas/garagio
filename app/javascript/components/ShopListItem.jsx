import { FaTimes } from 'react-icons/fa'
import React from 'react'
import { Link } from "react-router-dom";
import Button from './Button'


const ShopListItem = ({ shop, year, make, model, body, services }) => {
    return (
        <div
            // className={`task ${shop.reminder ? 'reminder' : ''}`}
            className={'shop-list-item'}
            onDoubleClick={() => onToggle(task.id)}
        >
            <h3>
                {shop.shop_name}{' '}
            </h3>
            &nbsp;&nbsp;
            { shop.distance_to_location}mi away

            <div className='book-now-button'>

                <Link to={{
                    pathname: '/login',
                    props: {
                        year: year,
                        make: make,
                        model: model,
                        body: body,
                        shop: shop,
                        services: services
                    }
                }}>

                    <Button
                        className="btn btn-lg custom-button"
                        text="Book now"
                    // onClick={
                    //     console.log("Current selected services: " + selectedServices.toString())
                    // }
                    />


                    {/* <FaTimes
                        style={{ color: 'red', cursor: 'pointer' }}
                    // onClick={() => onSelect(task.id)}
                    /> */}
                </Link>
            </div>

            {/* <p>{shop.distance_to_location}mi away</p> */}
        </div>
    )
}

export default ShopListItem
