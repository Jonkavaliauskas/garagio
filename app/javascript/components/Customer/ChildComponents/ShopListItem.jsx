import { FaTimes } from 'react-icons/fa'
import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import Button from '../../Button'
import Rating from '@material-ui/lab/Rating'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import LinesEllipsis from 'react-lines-ellipsis'

const ShopListItem = ({ shop, year, make, model, body, services }) => {
    const [expanded, setExpanded] = useState(false);
    let history = useHistory();

    const shopMoreInfo = () => {
        confirmAlert({
            title: shop.shop_name,
            // message: shop.distance_to_location + "mi away",
            childrenElement: () => <div>
                <Rating style={{ top: '5px' }} name="half-rating-read" defaultValue={shop.average_review == -1 ? 0 : shop.average_review} precision={0.5} readOnly />
                &nbsp;&nbsp;&nbsp;
                {shop.distance_to_location + "mi away"}

                <div style={{ paddingTop: '22px' }}>
                    <LinesEllipsis
                        text={shop.description}
                        maxLine={expanded ? 10 : 3}
                        ellipsis={<span onClick={() => setExpanded(true)} style={{ color: "#a4a4a4" }}>...read more</span>}
                        trimRight
                        basedOn={'letters'}
                    />
                </div>
                <div style={{ paddingTop: '22px' }}>
                    {shop.address}
                </div>
                <div style={{ paddingTop: '9px' }}>
                    <a href={"mailto: " + shop.email}>{"Send  " + shop.shop_name + " an Email"}</a>
                </div>

            </div>,
            buttons: [
                {
                    label: 'Return to list',
                    onClick: () => close
                },
                {
                    label: 'Book now!',
                    onClick: () => {
                        history.push("/finalizeappointment", {
                            year: year,
                            make: make,
                            model: model,
                            body: body,
                            shop: shop,
                            services: services

                        })
                    }
                }
            ]
        })
    }


    return (
        <>
            <div className={'shop-list-item'}>
                <div className={'shop-list-item-top'}>
                    <div className='shop-list-item-text' onClick={() => shopMoreInfo()} style={{ cursor: 'pointer' }}>
                        <h3 >
                            {shop.shop_name}{' '}
                        </h3>
                        &nbsp;
                        {shop.distance_to_location}mi away
                    </div>

                    &nbsp;&nbsp;<Rating name="half-rating-read" style={{ top: '5px' }} defaultValue={shop.average_review == -1 ? 0 : shop.average_review} precision={0.5} readOnly />

                    <div className='book-now-button'>

                        <Link to={{
                            pathname: '/finalizeappointment',
                            state: {
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
                            />


                            {/* <FaTimes
                            style={{ color: 'red', cursor: 'pointer' }}
                        // onClick={() => onSelect(task.id)}
                        /> */}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShopListItem
