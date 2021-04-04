import { FaTimes } from 'react-icons/fa'
import React from 'react'
import { Link } from "react-router-dom";
import Button from './Button'


const ShopListItem = ({ name, distance }) => {
    return (
        <div
            // className={`task ${shop.reminder ? 'reminder' : ''}`}
            className={'shop-list-item'}
            onDoubleClick={() => onToggle(task.id)}
        >
            <h3>
                {name}{' '}
                <Link to='/login'>
                    <Button
                        className=""
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
            </h3>
            <p>{distance}mi away</p>
        </div>
    )
}

export default ShopListItem
