import React, { useState } from "react";
import { database, auth } from "../config/firebase";
import ListElement from "./ListElement";
import "../styles/Organizations.scss";
import {
  getDocs,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Organizations() {
  const [displayCollection, setDisplayCollection] = useState([]);
  // collection: method that gives references to the collection from firebase
  const fundationsListRef = collection(database, "fundations-list");
  const organizationsListRef = collection(database, "organizations-list");

  const fetchCollectionData = async (collectionRef) => {
    const querySnapshot = await getDocs(collectionRef);
    const items = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDisplayCollection(items);
  };

  // change view of org list:::
  const handleDisplayList = (id) => {
    // setDisplayCollection("fundations");
    console.log("btn id:", id);
    if (id === "fundations") {
      fetchCollectionData(fundationsListRef);
    } else if (id === "organizations") {
      fetchCollectionData(organizationsListRef);
    } else if (id === "collections") {
      setDisplayCollection("collections");
    }
  };
  return (
    <>
      <div className="organizations" id="organizations">
        <h1>Komu Pomagamy?</h1>
        <div className="org-decoration"></div>
        <button
          className="fundations"
          id="fundations"
          onClick={() => {
            handleDisplayList("fundations");
          }}
        >
          Fundacjom
        </button>
        {/* ----------------- */}
        <button
          className="fundations"
          id="organizations"
          onClick={() => {
            handleDisplayList("organizations");
          }}
        >
          Organizacjom pozarządowym
        </button>
        {/* ------------------ */}
        <button
          className="fundations"
          id="collections"
          onClick={() => {
            handleDisplayList("collections");
          }}
        >
          Lokalnym zbórkom
        </button>
        {/* -------------------- */}
      </div>
      <ul>
        {displayCollection.map((element, index) => {
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
    </>
  );
}

export default Organizations;
