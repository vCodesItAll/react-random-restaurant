"use client"
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.css";
// import video from "vid.mp4";
import axios from "axios";
import React, {useEffect, useState} from "react";



export default function Home() {
  let [data, setData] = useState([]);

  // Make a request for a user with a given ID
  axios
    .get("https://www.jsonkeeper.com/b/MDXW")
    .then(function (response) {
      // handle success
      console.log(response.data);
      setData(response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });

  return (
    <>
      <header className="text-center">
        <h1>address</h1>
        <h1>JONATHAN</h1>
        <h1>hours</h1>
      </header>

      {/* <div className="container">
        <video
          src={video}
          width={500}
          height={500}
          controls
        />
      </div> */}

      <div className="d-flex align-items-start">
        <div
          className="nav flex-column nav-pills me-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <button
            className="nav-link active"
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
          >
            Appetizers
          </button>
          <button
            className="nav-link"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
          >
            Breakfast
          </button>
          <button
            className="nav-link"
            id="v-pills-messages-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-messages"
            type="button"
            role="tab"
            aria-controls="v-pills-messages"
            aria-selected="false"
          >
            Lunch
          </button>
          <button
            className="nav-link"
            id="v-pills-settings-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-settings"
            type="button"
            role="tab"
            aria-controls="v-pills-settings"
            aria-selected="false"
          >
            Dinner
          </button>
        </div>
        {/* content for tab content */}
        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="v-pills-home"
            role="tabpanel"
            aria-labelledby="v-pills-home-tab"
          >
            APPETIZERS CONTENT 
            {
              
                data.map((item, index) => {
                  return (
                    <div key={index}>
                      <h1>{item.title}</h1>
                      <p>{item.description}</p>
                      <p>{item.price}</p>
                    </div>
                  )
                })
              
            }
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
          >
            BREAKFAST CONTENT
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-messages"
            role="tabpanel"
            aria-labelledby="v-pills-messages-tab"
          >
            LUNCH CONTENT
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-settings"
            role="tabpanel"
            aria-labelledby="v-pills-settings-tab"
          >
            DINNER CONTENT
          </div>
        </div>
      </div>
    </>
  );
}
