import React, { useState, useEffect } from "react";
import { database, auth } from "../config/firebase";
import ListElement from "./ListElement";
import "../styles/Organizations.scss";
import { getDocs, collection } from "firebase/firestore";

function Organizations() {
  const [displayCollection, setDisplayCollection] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  // collection: method that gives references to the collection from firebase
  const fundationsListRef = collection(database, "fundations-list");
  const organizationsListRef = collection(database, "organizations-list");
  const fundraisingListRef = collection(database, "fundraising-list");

  const fetchCollectionData = async (collectionRef) => {
    const createCollectionFromFirebase = await getDocs(collectionRef);
    const items = createCollectionFromFirebase.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDisplayCollection(items);
    setCurrentPage(1);
  };
  useEffect(() => {
    fetchCollectionData(organizationsListRef); // fetch data when component mounts
  }, []);

  // change view of org list:::
  const handleDisplayList = (id) => {
    // setDisplayCollection("fundations");
    console.log("btn id:", id);
    if (id === "fundations") {
      fetchCollectionData(fundationsListRef);
    } else if (id === "organizations") {
      fetchCollectionData(organizationsListRef);
    } else if (id === "collections") {
      fetchCollectionData(fundraisingListRef);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = displayCollection.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className="organizations" id="organizations">
        <h1>Komu Pomagamy?</h1>

        <div className="org-decoration"></div>
        <div className="buttons">
          <button
            className="fundations-btn display-btn"
            id="fundations"
            onClick={() => {
              handleDisplayList("fundations");
            }}
          >
            Fundacjom
          </button>
          {/* ----------------- */}
          <button
            className="organizations-btn display-btn"
            id="organizations"
            onClick={() => {
              handleDisplayList("organizations");
            }}
          >
            Organizacjom pozarządowym
          </button>
          {/* ------------------ */}
          <button
            className="collections-btn display-btn"
            id="collections"
            onClick={() => {
              handleDisplayList("collections");
            }}
          >
            Lokalnym zbórkom
          </button>
        </div>
        {/* ----------- */}
        <p className="list-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor,
          fugiat laudantium fuga velit porro. Quo eligendi optio, quas dolorem
          labore nostrum!
        </p>
        {/* -------------------- */}
      </div>
      <ul className="list-container">
        {currentItems.map((element, index) => {
          return (
            <ListElement
              className="single-element"
              key={index}
              name={element.name}
              description={element.description}
            />
          );
        })}
      </ul>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(displayCollection.length / itemsPerPage) },
          (_, index) => (
            <button
              className="paginate-btn"
              key={index}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </>
  );
}

export default Organizations;
