import React, { Component } from "react";
import { getMessage } from "../service";

import { Button, Pane, Combobox, TextInput } from "evergreen-ui";
import "../App.css";
import mockStudentsProfiles from "../mockStudentsProfiles.json";

export class FloatingMentor extends Component {

  state = { message: "Loading..." };

  render() {
    const { message } = this.state;
    return (
      <div>
        <Pane
          // key={index}
          elevation={4}
          height={250}
          width={1400}
          padding={100}
          position="center"
          display="flex"
          alignItems="center"
          borderRadius={3}
          border="default"
          background="blueTint"
        >
          <Pane
            width="100%"
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Combobox
              items={mockStudentsProfiles.map(s => s.name)}
              height={48}
              onChange={selected => console.log(selected)}
              placeholder="Students"
              autocompleteProps={{
                title: "Students"
              }}
            />

            <Pane>
              <TextInput
                width="100%"
                height={48}
                width={800}
                placeholder="Comments..."
              />
              <Button height={48} appearance="primary" marginTop={20}>
                Submit
              </Button>
            </Pane>
          </Pane>
        </Pane>
      </div>
    );
  }
}
export default FloatingMentor;
