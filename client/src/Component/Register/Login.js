import React, { Component } from "react";
import { withRouter, Browserhistory as history } from "react-router-dom";
import userIcon from "../image/user.png";
import "./index.css";
import { insideCircle } from "geolocation-utils";
// import Joi from "joi";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      position: "",
      isPositionConfirmed: "notChecked"
    };
  }

  componentWillMount() {
    this.getLocation();
  }

  handleChange = async e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { email, password, position, isPositionConfirmed } = this.state;
    const status = e.target.value;
    this.confirmLocation(position.latitude, position.longitude);
    console.log("before try position confirmation", isPositionConfirmed);
    if (isPositionConfirmed !== "confirmed" ) {
      return this.props.history.push("/");
    } else if (isPositionConfirmed==="confirmed"){
      // fetch("http://localhost:3000/api/loginJoanTest", {
      // });
      try {
        const res = await fetch("api/login", {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: email,
            password: password,
            status: status
          })
        });
        const json = await res.json();
        if (res.status !== 200) {
          alert(json.msg);
        } else {
          if (status === "STUDENT") {
            if (this.state.isPositionConfirmed === "confirmed") {
              return this.props.history.push("/studentRegistered");
            } else {
              return this.props.history.push(
                "/"
              );
            }
          } else if (status === "MENTOR") {
            return this.props.history.push("/mentorHome");
          } else if (status === "ADMIN") {
            return this.props.history.push("/adminHome");
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  //const status = e.target.value;

  // validate = () => {
  //   const schema = {
  //     name: Joi.string().min(6).required(),
  //     email: Joi.string().min(6).required().email(),
  //     password: Joi.string().min(6).required(),
  //   };
  // }
  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          position: position.coords
        });
      });
    }
  };

  confirmLocation = (poslat, poslong) => {
    console.log(poslat, poslong);
    const positionOfCYFOffice = { lat: 51.53, lon: -0.05 };
    const positionOfticketMaster = { lat: 51.53, lon: -0.1 };
    const radius = 1000; // meters
    const chechkResult = insideCircle(
      { lat: poslat, lon: poslong },
      positionOfticketMaster,
      radius
    );
    console.log('confirmlocation', chechkResult);
    this.setState({
      isPositionConfirmed: chechkResult === true ? "confirmed" : "notConfirmed"
    });
  };

  render() {
    const { email, password, position, isPositionConfirmed } = this.state;

    return (
      <main className="main">
        <h1>Register Attendance</h1>
        <div className="user">
          <img src={userIcon} alt="user icon" />
        </div>
        <div className="form">
          <form>
            <input
              type="text"
              value={email}
              name="email"
              placeholder="Email"
              onChange={e => this.handleChange(e)}
              required
            />
            <input
              type="password"
              value={password}
              name="password"
              placeholder="Password"
              onChange={e => this.handleChange(e)}
              required
            />
            <section className="btnSection">
              <button
                onClick={e => this.handleSubmit(e)}
                type="submit"
                className="btn student"
                value="STUDENT"
              >
                Login as Student
              </button>

              <button
                onClick={e => this.handleSubmit(e)}
                type="submit"
                className="btn mentor"
                value="MENTOR"
              >
                Login as Mentor
              </button>

              <button
                onClick={e => this.handleSubmit(e)}
                type="submit"
                className="btn admin"
                value="ADMIN"
              >
                Login as Admin
              </button>
            </section>
            <p>Your Position : </p>
            <p>Lat : {position.latitude}</p>
            <p>Long : {position.longitude}</p>
            {isPositionConfirmed != "notChecked" &&
              (isPositionConfirmed === "notConfirmed" ? (
                <p>
                  Check your location , you are not at the class yet, hurry up!
                </p>
              ) : isPositionConfirmed === "confirmed" ? (
                <p>Your position is confirmed, enjoy the class!</p>
              ) : null)}
          </form>
        </div>
      </main>
    );
  }
}

export default withRouter(login);
