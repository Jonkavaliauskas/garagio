import React from "react";

const CarInfo = ({apptCar, fetchApptCar}) => {

  return (
    <p className="information">
      {apptCar["year"]} {apptCar["make"]} {apptCar["model"]}
    </p>
  );
};

export default CarInfo;
