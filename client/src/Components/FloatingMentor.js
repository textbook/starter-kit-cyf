import React, { Component } from "react";
import { getMessage } from "../service";

import { Button, Pane, Combobox, TextInput, Table } from "evergreen-ui";
import "../App.css";
import mockStudentsProfiles from "../mockStudentsProfiles.json";

export class FloatingMentor extends Component {
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
              onChange={selected => this.handyStudent(selected)}
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

        <Pane>
          <TextInput
            width="100%"
            height={200}
            marginTop={25}
            width={500}
            placeholder={this.state.clickedStudent}
          />
          <Table.Body>
            <Table.Head>
              <Table.TextCell flexBasis={200} flexShrink={0} flexGrow={0}>
                Student Name:
              </Table.TextCell>
              <Table.TextCell >
                {this.state.clickedStudent}
              </Table.TextCell>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.TextCell>Students Soft Skills:</Table.TextCell>
              </Table.Row>
              <Table.Row>
                <Table.TextCell>Students Tech Skills:</Table.TextCell>
              </Table.Row>
            </Table.Body>
          </Table.Body>
        </Pane>
      </div>
    );
  }
}
export default FloatingMentor;
