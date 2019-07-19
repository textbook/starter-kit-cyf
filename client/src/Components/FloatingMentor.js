import React, { Component } from "react";
import { getMessage } from "../service";

import { Button, Pane, Combobox, TextInput, Table, Avatar, Heading, theme } from "evergreen-ui";
import "../App.css";
import mockStudentsProfiles from "../mockStudentsProfiles.json";

export class FloatingMentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedStudent: null,
      selectedStudentProfile: null,
      FloatingMentorComments: null,
      commentSubmitted: null,
      errormessage: null
    };
  }

  handyStudent = selected => {
    console.log("handystudent working....")
    this.setState({
      clickedStudent: selected,
      errormessage: null
    });
  };

handyComments = (e) => {
  console.log("handyComments working");
 {this.state.clickedStudent === null ? this.handleError() : this.setState({FloatingMentorComments: this.state.commentSubmitted})
}}

handleError = () => {
  console.log("handleError working");
    this.setState({
      errormessage: "Please Choose Student by using left dropdown menu"
    });
} 

  render() {
     console.log("render working");
     var selectedStudentProfile = mockStudentsProfiles.filter(s => {
       return s.name === this.state.clickedStudent;
     } );
     console.log(this.state.FloatingMentorComments);
     
    return (
      <div>
        <Pane
          // key={index}
          elevation={4}
          height={200}
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
                placeholder="Floating Mentor's Comments..."
                onChange={e =>
                  this.setState({ commentSubmitted: e.target.value })
                }
              />
              <Button
                height={48}
                appearance="primary"
                marginTop={20}
                onClick={this.handyComments}
              >
                Submit
              </Button>
              <h3> {this.state.errormessage}</h3>
            </Pane>
          </Pane>
        </Pane>
        <Pane height={200} width={500} float="left">
          <Avatar
            src={
              selectedStudentProfile.length > 0
                ? selectedStudentProfile[0].studentPhoto
                : null
            }
            name={
              selectedStudentProfile.length > 0
                ? selectedStudentProfile[0].name
                : null
            }
            size={250}
          />
          <Table.Body>
            <Table.Head>
              <Table.TextCell flexBasis={200} flexShrink={0} flexGrow={0}>
                Student Name:
              </Table.TextCell>
              <Table.TextCell flexBasis={200} flexShrink={0} flexGrow={0}>
                {selectedStudentProfile.length > 0 &&
                  selectedStudentProfile[0].name}
              </Table.TextCell>
            </Table.Head>
            <Table.Body>
              <Table.Row>
                <Table.TextCell flexBasis={200} flexShrink={0} flexGrow={0}>
                  Students Soft Skill:
                </Table.TextCell>
                <Table.TextCell>
                  {selectedStudentProfile.length > 0 &&
                    selectedStudentProfile[0].softSkills}
                </Table.TextCell>
              </Table.Row>
              <Table.Row>
                <Table.TextCell flexBasis={200} flexShrink={0} flexGrow={0}>
                  Students Tech Skill:
                </Table.TextCell>
                <Table.TextCell>
                  {selectedStudentProfile.length > 0 &&
                    selectedStudentProfile[0].techinalSkills}
                </Table.TextCell>
              </Table.Row>
              <Table.Row>
                <Table.TextCell flexBasis={200} flexShrink={0} flexGrow={0}>
                  Syllabus:
                </Table.TextCell>
                <Table.TextCell>
                  {selectedStudentProfile.length > 0 &&
                    selectedStudentProfile[0].techinalSkills}
                </Table.TextCell>
              </Table.Row>
            </Table.Body>
          </Table.Body>
        </Pane>
        <Pane
          elevation={5}
          height={400}
          width={800}
          margin={10}
          padding={10}
          display="flex"
          alignItems="center"
          borderRadius={3}
          border="default"
          background="blueTint"
        >
          <Heading size={700}>COMMENTS:</Heading>

          <Table.Row>
            <Table.TextCell size={100} width={300} height={100}>
              Floating Mentor's Comments:
            </Table.TextCell>
            <Table.TextCell size={100} width={300} height={100}>
              {this.state.FloatingMentorComments}
            </Table.TextCell>
          </Table.Row>
        </Pane>
      </div>
    );
  }
}
export default FloatingMentor;


/*


*/