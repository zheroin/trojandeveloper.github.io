import React, { Component, Fragment } from "react";

import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";
import AOS from "aos";
import "aos/dist/aos.css";



AOS.init();
const styles = theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
class Experience extends Component {
  render() {
    return (
      <Fragment>
        <div className="exp_row" id="experience">
          <h1 className="name-css">
            Work <span className="surname">Experience</span>
          </h1>
        </div>
        <div className="workchips">
          <Card className="workcard" data-aos="zoom-in-right">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>Web Developer</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#cac531" }}>TOTALCAN</h2>
              <Typography variant="body2" color="inherit" component="p">
              - A fun web app for an amusement park based in Australia. In 2013 they had to launch a horror house and to market the horror house I developed a JavaScript based horror app that fetched pictures and info for the users’ Facebook friends and replacing it with placeholders picture frames in the app giving trying to giving a real horror feeling.
              - An online ecommerce platform to share and sell PDF/Word Books online by sharing like scribd.com. Led the development and integrated box’s API to generate the preview, background jobs were intelligently developed to take care of the box API processing time and retries in case of failure.

              </Typography>
            </CardContent>
            <CardActions>
              <span>Apr 2011 -</span>-<span>Jul 2013</span>
            </CardActions>
          </Card>
          <Card className="workcard" data-aos="zoom-in">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>Full-Stack Developer</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              {" "}
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#cac531" }}>SOFTSERVE</h2>
              <Typography variant="body2" color="inherit">
              - Dreamworld: An automated grid management tool. Worked as a full stack developer, designing and developing different microservices and the main Meteor based crew and grid management app, automated testing and improved the speed of the frontend app by profiling and identifying bottlenecks.
              - Eduary: A texting and payments application that makes it easy for patients to pay their medical bills from their mobile device. Led the development and design for both the frontend (React.js) and backend (Rails) and developing major features of the app and ensuring maximum test coverage and securing large amounts of patient’s data and developing proper analytics to help them improve their after-insurance balance recovery.
.
              </Typography>
            </CardContent>
            <CardActions>
              <span>Jul 2013 -</span>-<span>Aug 2017</span>
            </CardActions>
          </Card>
          <Card className="workcard" data-aos="zoom-in-left">
            <CardContent className="work1">
              <h1 style={{ color: "#f7f8f81" }}>Senior Software Engineer</h1>
            </CardContent>{" "}
            <Divider light />
            <CardContent>
              <i className="fas fa-map-marker-alt" />
              <h2 style={{ color: "#cac531" }}>EPAM SYSTEMS</h2>
              <Typography variant="body2" color="inherit" component="p">
              After working as a Senior Full Stack Developer at Punch for over a year, I was offered the position of Director of Engineer at the Agency. In this Role my responsibilities now included
- Technical Architecture: Ensuing all projects are built on sound architecture. Since Punch was a digital agency, we had a lot of projects coming in every day. My responsibility was to suggest the preferred technology/framework depending on the requirements of the project.
- Time line and deliveries: One of the biggest challenges of my job was to divide the requirements into smaller tasks so that we could create a roadmap and execution plan based on the tasks.
- Project Management: I had a team of project managers under me. My responsibility was to make sure that every project was being managed according to the standards and all milestones were delivered on time and the velocity of a team is set accordingly.

              </Typography>
            </CardContent>
            <CardActions>
              <span>June 2019 -</span>
              <span>Oct 2022</span>
            </CardActions>
          </Card>
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Experience);
