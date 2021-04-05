import ShopListItem from './ShopListItem'
import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Button from './Button'
import Footer from './Footer'


const ShopList = (props) => {
  let { year, make, model, body, services, zipcode } = props.location.state;
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
    const res = await fetch('/api/v1/shop_owners/index?address=' + zipcode + '&distance=50')
    const data = await res.json()

    return data
  }

  return (
    <>
      <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
          <div className="container secondary-color">
            <h1 className="display-4">Garagio</h1>
            <p className="lead">Nearby car shops that support your needed services:</p>
            <hr />
          </div>
          <div className="d-flex flex-row justify-content-center mt-3">
            <div className="d-flex flex-column m-3">
              <div className="shop-list-container">

                {
                  shops.map((shop, index) => (
                    <ShopListItem key={index} shop={shop} year={year} make={make} model={model} body={body} services={services} />
                  ))

                }
              </div>

            </div>
          </div>
        </div>
        <Footer />

      </div>

    </>

  )
}

export default ShopList