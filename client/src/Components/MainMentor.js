import React, { Component } from "react";
import { getMessage } from "../service";
import mockStudentsProfiles from "../mockStudentsProfiles.json";

import { Button, Pane ,Combobox } from 'evergreen-ui';
import "../App.css";

export class MainMentor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clickedStudent: null
    };
  }

  handyStudent = selected => {
    console.log("handystudent working....")
    this.setState({
      clickedStudent: selected
    });
  };
  render() {
    const { message } = this.state;
    return (
      
<Pane
      // key={index}
      elevation={4}
      height={250}
      width={800}
      padding={16}
      display = "flex"
      alignItems="center"
      borderRadius={3}
      border="default"
      background="blueTint"
      >
      
      <Pane width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">

      <Combobox
              items={mockStudentsProfiles.map(s => s.name)}
              height={48}
              onChange={selected => this.handyStudent(selected)}
              placeholder="Students"
              autocompleteProps={{
                title: "Students"
              }}
            />



</Pane>

</Pane>







   )
  }
}
export default MainMentor;
