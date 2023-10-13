import Image from 'next/image'
import styles from './page.module.css'
import "bootstrap/dist/css/bootstrap.css";

const axios = require('axios');

// Make a request for a user with a given ID
axios.get("https://www.jsonkeeper.com/b/MDXW")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

export default function Home() {

  return (
  <>
  <header className="text-center">
  <h1>address</h1><h1>JONATHAN</h1><h1>hours</h1>

  </header>

    <div className="container">
      <Image
      src="/bird.png"
      width={500}
      height={500}
      alt="neopets throwback photo of island bird"
      />
      </div>

      <div className="d-flex align-items-start">
  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <button 
      className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>
    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>
    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>
    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
  </div>
  <div className="tab-content" id="v-pills-tabContent">
    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
  </div>
</div>



  </>
  )
}