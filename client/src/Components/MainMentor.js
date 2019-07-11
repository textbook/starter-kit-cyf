import React, { Component } from "react";
import { getMessage } from "../service";

import { Button, Pane } from 'evergreen-ui';
import "../App.css";

export class MainMentor extends Component {

  state = { message: "Loading..." };

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

<Button
appearance="primary"
height={40}
margin={24}
is="a" href="/mMentor">
Student  </Button>



<Button
  appearance="primary"
  height={40}
  margin={24}
  is="a" href="/mMentor">
  >
CYF Mentor  </Button>
</Pane>

</Pane>
   );
  }
}
export default MainMentor;
