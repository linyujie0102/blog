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
    width: "600px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }
};

class LoginModal extends React.Component {


  state = {
    email: '',
    password: '',
    snackbar: true,
  }

  handleChange = name => event => {
    console.log('change')
    this.setState({
      [name]: event.target.value,
    })
  }

  login = () => () => {
    loginService(this.state.email, this.state.password)
      .then(response => {
        if (response.data.success) {
          window.sessionStorage.setItem("admin", true)
          this.props.snackBarController(
            'success',
            'Welcome Gryffindor'
          )
        } else {
          this.props.snackBarController(
            'danger',
            'Fuck off, Slytherin'
          )
        }
      })
      .catch(error => {
        this.props.snackBarController(
          'warning',
          'Ops, I am broken, try again'
        )
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
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Entrance to Gryffindor Tower</h4>
              <p className={classes.cardCategoryWhite}>The Fat Lady guarding Gryffindor Tower: "Password?"</p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      value: this.state.email,
                      onChange: this.handleChange('email')
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CustomInput
                    labelText="Password"
                    id="password"
                    inputProps={{
                      type: "password",
                      value: this.state.password,
                      onChange: this.handleChange('password')
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button
                color="primary"
                onClick={this.login()}
              >
                Alohomora
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Modal>
    )
  }
}

export default withStyles(styles)(LoginModal);
