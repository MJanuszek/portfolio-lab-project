import React from "react";
import "../styles/Organizations.scss";
import {
  getDocs,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

const handleDisplayFundationsList = () => {
  return <p>temp text</p>;
};

function Organizations() {
  // collection: method that gives references to the collection from firebase
  // const journalEntriesRef = collection(database, "journal-entries");
  return (
    <>
      <div className="organizations" id="organizations">
        <h1>Komu Pomagamy?</h1>
        <div className="org-decoration"></div>
        <button
          className="fundations"
          id="fundations"
          onClick={handleDisplayFundationsList}
        >
          Fundacjom
        </button>
        <button
          className="fundations"
          id="fundations"
          onClick={handleDisplayFundationsList}
        >
          Organizacjom pozarządowym
        </button>
        <button
          className="fundations"
          id="fundations"
          onClick={handleDisplayFundationsList}
        >
          Lokalnym zbórkom
        </button>
      </div>
    </>
  );
}

export default Organizations;
