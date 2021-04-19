import { FaTimes } from 'react-icons/fa'
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Button from '../../Button'
import Rating from '@material-ui/lab/Rating'

// import ReactTextCollapse from 'react-text-collapse'
// import ViewMoreText from 'react-native-view-more-text';
import LinesEllipsis from 'react-lines-ellipsis'

const ShopListItem = ({ shop, year, make, model, body, services }) => {
    const [ expanded, setExpanded ] = useState(false);

    return (
        <>
            <div className={'shop-list-item'}>
                <div className={'shop-list-item-top'}>
                    <div className='shop-list-item-text'>
                        <h3>
                            {shop.shop_name}{' '}
                        </h3>
                    &nbsp;&nbsp;
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
                <div> 
                    <LinesEllipsis
                    text={shop.description}
                    maxLine={expanded ? 10 : 3}
                    ellipsis={<span onClick={() => setExpanded(true)} style={{color:"#a4a4a4"}}>...read more</span>}
                    trimRight
                    basedOn={'letters'}
                    />
                </div>
            </div>

        </>
    )
}

export default ShopListItem
