import React from 'react';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import InputLabel from "@material-ui/core/InputLabel";
import withStyles from "@material-ui/core/styles/withStyles";
import Modal from "@material-ui/core/Modal";
import {loginService} from 'services/api.js';
import Snackbar from "components/Snackbar/Snackbar.jsx";
import AddAlert from "@material-ui/icons/AddAlert";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import ImageCard from "components/ImageCard/ImageCard.jsx";
import {postImageService, postBlogService, postVlogService} from 'services/api.js';
import ReactMarkdown from 'react-markdown';
import VlogCard from "components/VlogCard/VlogCard.jsx";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  cardPosition: {
    position: "absolute",
    width: "90%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  cardBody: {
    height: '500px',
    overflow: "scroll"
  }
};

class NewPostModal extends React.Component {

  state = {
    type: 'image',
    title: {
      cn: '',
      en: '',
    },
    body: {
      cn: '',
      en: '',
    },
    location: {
      cn: '',
      en: '',
    },
    video_url: {
      cn: '',
      en: ''
    },
    image: null,
    image_url: null,
    video: null,
    blog_preview: 'en',
    vlog_preview: 'en'
  }

  componentDidUpdate(prevProps) {
    if (prevProps.open && !this.props.open) {
      this.setState({
        title: {
          cn: '',
          en: '',
        },
        body: {
          cn: '',
          en: '',
        },
        location: {
          cn: '',
          en: '',
        },
        video_url: {
          cn: '',
          en: '',
        },
        image: null,
        image_url: null,
        video: null,
      })
    }
  }

  postImage = () => {
    postImageService(this.state)
    .then(response => {
      if (response.data.success) {
        this.props.snackBarController(
          'success',
          'Your Post have been recorded'
        )
        setTimeout(() => {
          window.location.reload();
        }, 2000)
      } else {
        this.props.snackBarController(
          'danger',
          'ops, some error happend'
        )
      }
    })
    .catch(error => {
      this.props.snackBarController(
        'danger',
        'ops, some error happend'
      )
    })
  }

  postBlog = () => {
    postBlogService(this.state)
    .then(response => {
      if (response.data.success) {
        this.props.snackBarController(
          'success',
          'Your Post have been recorded'
        )
        setTimeout(() => {
          window.location.reload();
        }, 2000)
      } else {
        this.props.snackBarController(
          'danger',
          'ops, some error happend'
        )
      }
    })
    .catch(error => {
      this.props.snackBarController(
        'danger',
        'ops, some error happend'
      )
    })
  }

  postVlog = () => {
    postVlogService(this.state)
    .then(response => {
      if (response.data.success) {
        this.props.snackBarController(
          'success',
          'Your Post have been recorded'
        )
        setTimeout(() => {
          window.location.reload();
        }, 2000)
      } else {
        this.props.snackBarController(
          'danger',
          'ops, some error happend'
        )
      }
    })
    .catch(error => {
      this.props.snackBarController(
        'danger',
        'ops, some error happend'
      )
    })
  }

  post = () => () => {
    console.log(this.state.type)
    switch(this.state.type){
      case "image":
        this.postImage();
        break;
      case "blog":
        this.postBlog();
        break;
      case "vlog":
        this.postVlog();
        break;
      default:
        this.postImage();
        break;
    }
  }
  getImageContent = () => {
    return [
      (
        <GridItem xs={12} sm={12} md={12} key={1}>
          <TextField
            id="standard-full-width"
            label="Title"
            helperText="Title in English"
            fullWidth
            value={this.state.title.en}
            onChange={this.handleChangeEn('title')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={2}>
          <TextField
            id="standard-full-width"
            label="标题"
            helperText="中文标题"
            fullWidth
            value={this.state.title.cn}
            onChange={this.handleChangeCn('title')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={3}>
          <TextField
            id="standard-full-width"
            label="Body"
            helperText="Body in English"
            fullWidth
            value={this.state.body.en}
            onChange={this.handleChangeEn('body')}
            multiline
            rows={3}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={4}>
          <TextField
            id="standard-full-width"
            label="正文"
            helperText="正文"
            fullWidth
            value={this.state.body.cn}
            onChange={this.handleChangeCn('body')}
            multiline
            rows={3}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={5}>
          <TextField
            id="standard-full-width"
            label="Location"
            helperText="Location"
            value={this.state.location.en}
            onChange={this.handleChangeEn('location')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={6}>
          <TextField
            id="standard-full-width"
            label="地址"
            helperText="地址"
            value={this.state.location.cn}
            onChange={this.handleChangeCn('location')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={7}>
          <input
            accept="image/*"
            id="outlined-button-file"
            multiple
            type="file"
            style={{display: 'none'}}
            onChange={(e) => this.handleImageChange(e)}
          />
          <label htmlFor="outlined-button-file">
            <Button
              variant="outlined"
              component="span"
              onChange={this.handleImageChange}>
              Upload Image
            </Button>
          </label>
        </GridItem>
      ),
      this.state.image_url ?
      (
        <div key={8}>
          <ImageCard
            title={this.state.title}
            body={this.state.body}
            imageUrl={this.state.image_url}
            location={this.state.location}
          />
        </div>
      )
      : null
    ]
  }

  getBlogContent = () => {
    return [
      (
        <GridItem xs={12} sm={12} md={12} key={1}>
          <TextField
            id="standard-full-width"
            label="Title"
            helperText="Title in English"
            fullWidth
            value={this.state.title.en}
            onChange={this.handleChangeEn('title')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={2}>
          <TextField
            id="standard-full-width"
            label="标题"
            helperText="中文标题"
            fullWidth
            value={this.state.title.cn}
            onChange={this.handleChangeCn('title')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={3}>
          <TextField
            id="standard-full-width"
            label="Body"
            helperText="Body in English"
            fullWidth
            value={this.state.body.en}
            onChange={this.handleChangeEn('body')}
            multiline
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={4}>
          <TextField
            id="standard-full-width"
            label="正文"
            helperText="正文"
            fullWidth
            value={this.state.body.cn}
            onChange={this.handleChangeCn('body')}
            multiline
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={5}>
          <TextField
            id="standard-full-width"
            label="Location"
            helperText="Location"
            value={this.state.location.en}
            onChange={this.handleChangeEn('location')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={6}>
          <TextField
            id="standard-full-width"
            label="地址"
            helperText="地址"
            value={this.state.location.cn}
            onChange={this.handleChangeCn('location')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={7}>
          <FormControl>
            <InputLabel htmlFor="blog_preview">preview lan</InputLabel>
            <Select
              value={this.state.blog_preview}
              onChange={this.handleChange('blog_preview')}
              inputProps={{
                name: 'blog_preview',
                id: 'blog_preview',
              }}
            >
              <MenuItem value={'cn'}>中文</MenuItem>
              <MenuItem value={'en'}>English</MenuItem>
            </Select>
          </FormControl>
        </GridItem>
      ),
      this.state.blog_preview === 'en' ?
      (
        <GridItem xs={12} sm={12} md={12} key={8}>
          <h3>Preview</h3>
          <ReactMarkdown source={this.state.body.en}/>
        </GridItem>
      )
      :
      (
        <GridItem xs={12} sm={12} md={12} key={8}>
          <h3>预览</h3>
          <ReactMarkdown source={this.state.body.cn}/>
        </GridItem>
      )

    ]
  }


  getVlogContent = () => {
    return [
      (
        <GridItem xs={12} sm={12} md={12} key={1}>
          <TextField
            id="standard-full-width"
            label="Title"
            helperText="Title in English"
            fullWidth
            value={this.state.title.en}
            onChange={this.handleChangeEn('title')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={2}>
          <TextField
            id="standard-full-width"
            label="标题"
            helperText="中文标题"
            fullWidth
            value={this.state.title.cn}
            onChange={this.handleChangeCn('title')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={3}>
          <TextField
            id="standard-full-width"
            label="Body"
            helperText="Body in English"
            fullWidth
            value={this.state.body.en}
            onChange={this.handleChangeEn('body')}
            multiline
            rows={3}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={4}>
          <TextField
            id="standard-full-width"
            label="正文"
            helperText="正文"
            fullWidth
            value={this.state.body.cn}
            onChange={this.handleChangeCn('body')}
            multiline
            rows={3}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={5}>
          <TextField
            id="standard-full-width"
            label="Video Link"
            helperText="Video Link from youtube"
            fullWidth
            value={this.state.video_url.en}
            onChange={this.handleChangeEn('video_url')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={6}>
          <TextField
            id="standard-full-width"
            label="视频链接"
            helperText="优酷视频链接"
            fullWidth
            value={this.state.video_url.cn}
            onChange={this.handleChangeCn('video_url')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={7}>
          <TextField
            id="standard-full-width"
            label="Location"
            helperText="Location"
            value={this.state.location.en}
            onChange={this.handleChangeEn('location')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={8}>
          <TextField
            id="standard-full-width"
            label="地址"
            helperText="地址"
            value={this.state.location.cn}
            onChange={this.handleChangeCn('location')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </GridItem>
      ),
      (
        <GridItem xs={12} sm={12} md={12} key={9}>
          <FormControl>
            <InputLabel htmlFor="vlog_preview">Select Preview</InputLabel>
            <Select
              value={this.state.vlog_preview}
              onChange={this.handleChange('vlog_preview')}
              fullWidth
              inputProps={{
                name: 'vlog_preview',
                id: 'vlog_preview',
              }}
            >
              <MenuItem value={'cn'}>中文</MenuItem>
              <MenuItem value={'en'}>English</MenuItem>
            </Select>
          </FormControl>
        </GridItem>
      ),
      this.state.vlog_preview === 'en' ?
      (
        <GridItem xs={12} sm={12} md={12} key={10}>
          <VlogCard
            title={this.state.title}
            body={this.state.body}
            location={this.state.location}
            videoUrl={this.state.video_url}
            language="en"/>
        </GridItem>
      )
      :
      (
        <GridItem xs={12} sm={12} md={12} key={10}>
          <VlogCard
            title={this.state.title}
            body={this.state.body}
            location={this.state.location}
            videoUrl={this.state.video_url}
            language="cn"/>
        </GridItem>
      )
    ]
  }

  handleImageChange = event => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        image: file,
        image_url: reader.result
      });
      console.log(this.state);
    }
    reader.readAsDataURL(file);

  }

  handleChangeCn = name => event => {
    this.setState({
      [name]: {
        ...this.state[name],
        cn: event.target.value,
      }
    })
  }

  handleChangeEn = name => event => {
    this.setState({
      [name]: {
        ...this.state[name],
        en: event.target.value,
      }
    })
  }

  handleChangeType = event => {
    this.setState({
      type: event.target.value
    })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const classes = this.props.classes
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.props.open}
        onClose={this.props.onClose}>
        <div className={classes.cardPosition}>
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>New Post</h4>
              <p className={classes.cardCategoryWhite}>To post blogs, choose type first</p>
            </CardHeader>
            <CardBody>
              <div className={classes.cardBody}>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <div>
                      <FormControl>
                        <InputLabel htmlFor="post-type">Type</InputLabel>
                        <Select
                          value={this.state.type}
                          onChange={this.handleChangeType}
                          inputProps={{
                            name: 'type',
                            id: 'post-type',
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={'image'}>Image</MenuItem>
                          <MenuItem value={'blog'}>Blog</MenuItem>
                          <MenuItem value={'vlog'}>Vlog</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </GridItem>
                  {this.state.type === 'image' ? this.getImageContent() : null}
                  {this.state.type === 'blog' ? this.getBlogContent() : null}
                  {this.state.type === 'vlog' ? this.getVlogContent() : null}
                </GridContainer>
              </div>
            </CardBody>
            <CardFooter>
              <Button
                color="info"
                onClick={this.post()}
              >
                Post!
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Modal>
    )
  }
}

export default withStyles(styles)(NewPostModal);
