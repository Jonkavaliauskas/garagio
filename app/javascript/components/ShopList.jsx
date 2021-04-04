import ShopListItem from './ShopListItem'
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Button from './Button'


const ShopList = ({ year, make, model, body, services, zipcode }) => {
  const [selectedShop, setSelectedShop] = useState()
  const [shops, setShops] = useState([])

  useEffect(() => {
    const getShops = async () => {
      const shopsFromServer = await fetchShops()
      setShops(shopsFromServer)
    }

    getShops()
  }, [])

  // Fetch Tasks
  const fetchShops = async () => {
    zipcode = '06511'
    const res = await fetch('/api/v1/shop_owners/index?address=' + zipcode + '&distance=5')
    const data = await res.json()

    return data
  }

  const onSelect = (id) => {

  }

  return (
    <>
      {
        shops.map((shop, index) => (
          <ShopListItem key={index} name={shop.shop_name} distance={shop.distance_to_location} />
        ))

      }
      {/* <Link
        to={{
          pathname: "/additionalinfo",
          props: {
            year: year,
            make: make,
            model: model,
            body: body,
            services: services,
            shop: selectedShop
          },
        }}>
        <Button
          className=""
          text="Submit"
          onClick={
            // console.log(
            //   "Submitted: " + props.location.state.year + " " + props.location.state.make + " " + 
            //   props.location.state.model + " " + props.location.state.body +
            //     " " + selectedServices)
            console.log("fanks m8")
          }
        />
      </Link> */}

    </>

  )
}

export default ShopList