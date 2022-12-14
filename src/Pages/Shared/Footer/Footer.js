import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer class="   " style={{ background: "#0B0D17" }}>
      <div class="row g-0 pt-1">
        <div class="col-sm-6 col-md-8 mt-5">
          <p style={{ color: "white" }}>
            <strong>
              {" "}
              Copyright © 2000-2022 All rights reserved by MrPhotoMan
            </strong>
          </p>
        </div>

        <div class="col-6 col-md-4 container">
          <h3 style={{ color: "white" }}>Get the app</h3>
          <a
            href="https://apps.apple.com/us/genre/mac-business/id12001?mt=12&letter=B"
            class="btn btn-store"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt=""
            />
          </a>
          <br />
          <a href="https://play.google.com/store/apps" class="btn btn-store" style={{width:'38%'}}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;