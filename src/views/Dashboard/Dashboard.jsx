import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import ImageCard from "components/ImageCard/ImageCard.jsx";
import BlogCard from "components/BlogCard/BlogCard.jsx";
import VlogCard from "components/VlogCard/VlogCard.jsx";
import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import {getImages, getPosts} from 'services/api.js';
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0,
    images: [],
    posts: [],
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  loadImages = () => {
    getImages()
      .then(response => {
        this.setState({images: response.data.images})
      })
      .catch(error => {
        console.log(error);
      })
  }

  loadPosts = () => {
    getPosts()
      .then(response => {
        this.setState({posts: response.data.posts})
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidMount() {
    this.loadPosts();
  }

  getImageCards = () => {
    return this.state.images.map((blog, index) => {
      const key = 'image' + index;
      return (
        <ImageCard
          title={blog.title}
          body={blog.body}
          imageUrl={blog.image_url}
          location={blog.location}
          date={blog.date}
          key={key}
        />
      )
    })
  }

  getPosts = () => {
    return this.state.posts.map((post, index) => {
      const key = 'post' + index;
      switch(post.type) {
        case 'image':
          return (
            <ImageCard
              title={post.title}
              body={post.body}
              imageUrl={post.image_url}
              location={post.location}
              date={post.date}
              key={key}
            />
          )
        case 'blog':
          return (
            <BlogCard
              title={post.title}
              body={post.body}
              location={post.location}
              date={post.date}
              key={key}
            />
          )
        case 'vlog':
          return (
            <VlogCard
              title={post.title}
              body={post.body}
              location={post.location}
              date={post.date}
              videoUrl={post.video_url}
              key={key}
            />
          )
        default:
          return null;
      }
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.getPosts()}
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
