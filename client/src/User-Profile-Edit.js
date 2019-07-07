import React, { Component } from "react";

class UserProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      firstName: "",
      lastName: "",
      occupation: "",
      jobInterest: "",
      bio: "",

      form: []
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    const { title, firstName, lastName, occupation, bio } = this.state;
    this.setState({
      form: { title, firstName, lastName, occupation, bio }
    });
    event.preventDefault();

    this.setState({
      title: "",
      firstName: "",
      lastName: "",
      occupation: "",
      bio: ""
    });
  };

  handleJobInterest = event => {
    //let jobInterestPush = this.state.jobInterest.push(event.target.value)
      this.setState({
        jobInterest: [...this.state.jobInterest , event.target.value] // should be a string in an array
      });
  };

  render() {
    console.log("onChange state", this.state);
    console.log("onSubmit state", this.state.form);
    const { title, firstName, lastName, occupation, bio } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label>
                Title:
                <select name="title" value={title} onChange={this.handleChange}>
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  <option value="mr">Mr</option>
                  <option value="ms">Ms</option>
                  <option value="mrs">Mrs</option>
                  <option value="miss">Miss</option>
                </select>
              </label>
            </li>
            <li>
              <label>
                First Name:
                <input
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={this.handleChange}
                />
              </label>
            </li>
            <li>
              <label>
                Last Name:
                <input
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={this.handleChange}
                />
              </label>
            </li>
            <li>
              <label>
                Occupation:
                <input
                  name="occupation"
                  type="text"
                  value={occupation}
                  onChange={this.handleChange}
                />
              </label>
            </li>
            <li>
              <label>
                Bio:
                <input
                  name="bio"
                  type="text"
                  value={bio}
                  onChange={this.handleChange}
                />
              </label>
            </li>
          </ul>
          <input type="submit" />
        </form>
        <form>
          <p>I am Interested in:</p>
          <ul>
            <li>
              <label>
                Front End Developer
                <input
                  type="checkbox"
                  name="front-end-developer"
                  value="front-end-developer"
                  onChange={this.handleJobInterest}
                />
              </label>
            </li>
            <li>
              <label>
                Back End Developer
                <input
                  type="checkbox"
                  name="back-end-developer"
                  value="back-end-developer"
                  onChange={this.handleJobInterest}
                />
              </label>
            </li>
            <li>
              <label>
                UX/UI Developer
                <input
                  type="checkbox"
                  name="ux/ui-developer"
                  value="ux/ui-developer"
                  onChange={this.handleJobInterest}
                />
              </label>
            </li>
            <li>
              <label>
                Software Quality Assurance Analyst
                <input
                  type="checkbox"
                  name="software-quality-assurance-analyst"
                  value="software-quality-assurance-analyst"
                  onChange={this.handleJobInterest}
                />
              </label>
            </li>
            <li>
              <label>
                Project Management
                <input
                  type="checkbox"
                  name="project-management"
                  value="project-management"
                  onChange={this.handleJobInterest}
                />
              </label>
            </li>
          </ul>
        </form>
      </div>
    );
  }
}

export default UserProfileEdit;
