import React from "react";
import { Link } from "react-router-dom";
import Footer from './Footer'
import Button from './Button'
import VehicleOptions from "./VehicleOptions";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.set_year = this.set_year.bind(this)
    this.set_make = this.set_make.bind(this)
    this.set_model = this.set_model.bind(this)
    this.set_body = this.set_body.bind(this)
    this.fetchData = this.fetchData.bind(this)


    this.state = {
      year: '',
      make: '',
      model: '',
      body: '',
      year_options: [],
      make_options: [],
      model_options: [],
      body_options: []
    }
  }

  componentDidMount() {
    this.fetchData("Year")
  }
  set_year = (val) => {
    var value = val[0].value[0]
    this.setState({ year: value })
    console.log('year = ' + value)
  }
  set_make = (val) => {
    var value = val[0].value[0]
    this.setState({ make: value })
    console.log('make = ' + value)
  }
  set_model = (val) => {
    var value = val[0].value[0]
    this.setState({ model: value })
    console.log('model = ' + value)
  }
  set_body = (val) => {
    var value = val[0].value[0]
    this.setState({ body: value })
    console.log('body = ' + value)
  }

  fetchData(make_model_year, year, make, model) {
    var url = ''
    if (make_model_year === 'Year') {
      url = "/api/v1/vehicle_infos/get_years";
    }
    else if (make_model_year === 'Make') {
      url = "/api/v1/vehicle_infos/" + year + "/get_makes";
    }
    else if (make_model_year === 'Model') {
      url = "/api/v1/vehicle_infos/" + year + "/" + make + "/get_models";
    }
    else if (make_model_year === 'Body') {
      url = "/api/v1/vehicle_infos/" + year + "/" + make + "/" + model + "/get_body_styles";
    }

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => {
        const arr = []
        Object.keys(response).forEach(key => arr.push({ name: key, value: response[key] }))
        return arr
      })
      .then(response => {
        if (make_model_year === 'Year') {
          this.setState({ year_options: response });
        }
        else if (make_model_year === 'Make') {
          this.setState({ make_options: response });
        }
        else if (make_model_year === 'Model') {
          this.setState({ model_options: response });
        }
        else if (make_model_year === 'Body') {
          this.setState({ body_options: response });
        }
      })

  }

  render() {
    const { year, make, model, body } = this.state;
    return (
      <div>
        <div className="login-container">
          Shop Owners:
          &nbsp;
          <Link
            to="/login">
            <Button
              className="btn btn-lg custom-button"
              text='Login'
            />
          </Link>
        &nbsp;
        <Link
            to={{
              pathname: "/dashboard",
              state: {
                shopOwnerId: '5'
              }
            }}>
            <Button
              className="btn btn-lg custom-button"
              text='Dashboard'
            />
          </Link>
          &nbsp;
        </div>

        <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
          <div className="jumbotron jumbotron-fluid bg-transparent">

            <div className="container secondary-color">
              <h1 className="display-4">Garagio</h1>
              <p className="lead">
                Connecting Drivers to Shop Owners easier than ever before!
          </p>
              <hr className="my-4" />
              <div className='vehicle-select-submit'>
                <div className="vehicle-dropdown">

                  <VehicleOptions
                    make_model_year='Year'
                    onChange={(value) => {
                      this.set_year(value);
                      this.fetchData('Make', value[0].value[0]);
                      // this.setState({ makes_options: this.fetchData('Make', value[0].value[0]) });
                    }}
                    options={this.state.year_options}
                  />
                &nbsp;
                <VehicleOptions
                    year={this.state.year}
                    make_model_year='Make'
                    onChange={(value) => {
                      this.set_make(value);
                      this.fetchData('Model', this.state.year, value[0].value[0]);
                    }}
                    disabled={year === ''}
                    options={this.state.make_options}
                  />
                &nbsp;
                <VehicleOptions
                    make_model_year='Model'
                    onChange={(value) => {
                      this.set_model(value);
                      this.fetchData('Body', this.state.year, this.state.make, value[0].value[0]);
                    }}
                    disabled={year === '' || make === ''}
                    options={this.state.model_options}
                  />
                &nbsp;
                <VehicleOptions
                    make_model_year='Body'
                    onChange={(value) => {
                      this.set_body(value);
                    }}
                    disabled={year === '' || make === '' || model === ''}
                    options={this.state.body_options}
                  />

                </div>

                {/* UNCOMMENT BELOW TO CONNECT (update routes.jsx and enter below) */}
                <Link to={{
                  pathname: '/serviceselect',
                  state: {
                    year: this.state.year,
                    make: this.state.make,
                    model: this.state.model,
                    body: this.state.body
                  }
                }}>
                <Button
                  className="btn btn-lg custom-button"
                  text='Submit'
                  onClick={() => console.log("Submitted: " + this.state.year + " " + this.state.make + " " + this.state.model + " " + this.state.body)}
                />
                </Link>


              </div>

            </div>

          </div>
          <div className='footer container'>
            <Footer />
          </div>

        </div>
      </div>
    );
  }

}

export default Home;
