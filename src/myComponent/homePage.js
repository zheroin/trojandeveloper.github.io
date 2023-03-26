import React, { Component, Fragment } from "react";
import { Grid } from "@material-ui/core";
import profile from "../images/profile.jpg";
class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ width: "100%", margin: "auto" }} className="home-page">
          <Grid container>
            <Grid item xs={12}>
              <div>
                <img src={profile} className="profile-img" alt="prifile-image" />
              </div>
              <h1 className="name-css">
                James <span className="surname">Lee</span>
              </h1>
              <p className="sub-detail">Full-Stack Developer</p>
              <br />
              <br />

              <div className="sub-detail">
                <p>Follow Me</p>
              </div>
              <p className="sub-detail2">
                <a href="https://github.com/trojandeveloper">
                  <i class="fab fa-github " />
                </a>
                <a href="">
                  <i class="fab fa-instagram " />
                </a>
                <a href="">
                  <i class="fab fa-facebook-f" />
                </a>
                <a href="">
                  <i class="fab fa-linkedin" />
                </a>
              </p>
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}

export default HomePage;
