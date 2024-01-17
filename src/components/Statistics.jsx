import React from "react";
import "../styles/Statistics.scss";

const numberOfDonations = 5;
const numberOfOrganizations = 3;
const numberOfCollections = 10;

function Statistics() {
  return (
    <>
      <div className="statistics" id="statistics">
        <div className="statistic-element">
          <h1>{numberOfDonations}</h1>
          <h3>ODDANYCH WORKÓW</h3>
          <p className="stats-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro
            esse fugit consectetur quisquam! Quas non sed aut error cum
            voluptatem voluptatibus perferendis illo.?
          </p>
        </div>
        <div className="statistic-element">
          <h1>{numberOfOrganizations}</h1>
          <h3>WSPARTYCH ORGANIZACJI</h3>
          <p className="stats-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro
            esse fugit consectetur quisquam! Quas non sed aut error cum
            voluptatem voluptatibus perferendis illo.?
          </p>
        </div>
        <div className="statistic-element">
          <h1>{numberOfCollections}</h1>
          <h3>ZORGANIZOWANYCH ZBIÓREK</h3>
          <p className="stats-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id porro
            esse fugit consectetur quisquam! Quas non sed aut error cum
            voluptatem voluptatibus perferendis illo.?
          </p>
        </div>
      </div>
    </>
  );
}

export default Statistics;
