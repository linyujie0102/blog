import React from "react";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import cardImagesStyles from "assets/jss/material-dashboard-react/cardImagesStyles.jsx";
import LocationOn from '@material-ui/icons/LocationOn';
import IconButton from '@material-ui/core/IconButton';
import Translate from "components/Translate/Translate.jsx";
import ReactMarkdown from 'react-markdown';

class BlogCard extends React.Component {

  static defaultProps = {
    title: {
      cn: '一个房子',
      en: 'a building'
    },
    body: {
      cn: "我爱洗澡\n- 皮肤好好\n- 哦哦哦哦\n- 健健康康\n- 蹦蹦跳跳\n- 哦哦哦哦",
      en: "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    imageUrl: "http://www.pune-re.com/images/project/thumbnails/success-square.jpg",
    location: {
      en: 'Boston',
      cn: '波士顿'
    },
    date: 1542079787584
  }

  render() {
    const { classes } = this.props;
    const titleData = {
      en: 'A building',
      cn: '一个房子',
    }

    const publishDate = new Date();
    const year = publishDate.getFullYear();
    const month = publishDate.getMonth() + 1;
    const day = publishDate.getDate();
    const printedDate = year + '-' + month + '-' + day;
    return (
      <Card className={classes.cardWrapper}>
      <CardBody style={{height: "24rem", overflowY: "Hidden", overflowX: "Auto"}}>
          <h4><Translate language='cn' data={this.props.title}/></h4>
          <div>
            <ReactMarkdown source={this.props.body.cn}/>
          </div>
        </CardBody>
        <CardFooter>
          <div className={classes.stats}>
            <LocationOn/><Translate language='cn' data={this.props.location}/>
          </div>
          <div className={classes.stats}>
            {printedDate}
          </div>
        </CardFooter>
      </Card>
    );
  }
}

export default withStyles(cardImagesStyles)(BlogCard);
