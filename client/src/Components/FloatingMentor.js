import React, { Component } from "react";
import { getMessage } from "../service";
import {
  Button,
  Pane,
  Combobox,
  TextInput,
  Table,
  Avatar,
  Heading,
  theme,
  Paragraph,
  Text,
  Strong
} from "evergreen-ui";
import "../App.css";
import mockStudentsProfiles from "../mockStudentsProfiles.json";

const selectedFloatingMentorName = "Maria";

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
    console.log("handystudent working....");
    this.setState({
      clickedStudent: selected,
      errormessage: null
    });
  };

  handyComments = e => {
    console.log("handyComments working");
    {
      this.state.clickedStudent === null
        ? this.handleError()
        : this.setState({
            FloatingMentorComments: this.state.commentSubmitted
          });
    }
  };

  handleError = () => {
    console.log("handleError working");
    this.setState({
      errormessage: "Please Choose Student by using left dropdown menu"
    });
  };

  getCurrentDate = (separator = "") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  };

  render() {
    console.log("render working");
    var selectedStudentProfile = mockStudentsProfiles.filter(s => {
      return s.name === this.state.clickedStudent;
    });
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
                alignItems="right"
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
                  {selectedStudentProfile.length > 0 && (
                    <a
                      target="_blank"
                      href="https://tinyurl.com/CYF-LDN5CALENDAR"
                    >
                      CYF London-5 Class Syllabus
                    </a>
                  )}
                </Table.TextCell>
              </Table.Row>
            </Table.Body>
          </Table.Body>
        </Pane>
        <Heading margin={30} size={700} alignItems="center">
          COMMENTS:
        </Heading>
        <Pane height={500} width={900} float="left">
          <Table.Body>
            <Table.Head>
              <Table.TextCell flexBasis={300} flexShrink={0} flexGrow={0}>
                Current Comment:
              </Table.TextCell>
            </Table.Head>
            <Table.Body>
              <Table.TextCell flexBasis={300} flexShrink={0} flexGrow={0}>
                <strong>
                  {selectedStudentProfile.length > 0 &&
                    this.state.FloatingMentorComments}
                </strong>
              </Table.TextCell>
            </Table.Body>

            <Table.Body height={250}>
              <Table.Row>
                <Table.TextCell flexBasis={400}>
                  Previous Comments writen by Floating Mentor:
                </Table.TextCell>
              </Table.Row>
              <Table.Row>
                <Table.TextCell
                  flexBasis={900}
                  flexShrink={0}
                  height={200}
                  flexGrow={0}
                >
                  {selectedStudentProfile.length > 0
                    ? selectedStudentProfile[0].floatingMentorcomments.map(
                        s => {
                          if (
                            s.floatingMentorName ===
                            selectedFloatingMentorName
                          )
                            return (
                              <Text>
                                {" "}
                                <Strong>
                                  {s.comment}
                                  <br />
                                  Date:
                                  {s.date}
                                  <br />
                                  Feedback by:
                                  {s.floatingMentorName}
                                  <br />
                                  <br />
                                </Strong>
                              </Text>
                            );
                          else return "";
                        }
                      )
                    : null}
                </Table.TextCell>
              </Table.Row>
            </Table.Body>
          </Table.Body>
        </Pane>
      </div>
    );
  }
}
export default FloatingMentor;

/*
   <Pane
          elevation={5}
          height={350}
          width={800}
          margin={10}
          padding={50}
          display="flex"
          alignItems="center"
          borderRadius={3}
          border="default"
          background="blueTint"
          alignItems="top"
        >
          <Table.Body>
            <Table.Row>
              <Table.TextCell
                flexBasis={200}
                flexShrink={0}
                flexGrow={0}
                size={100}
                width={300}
                height={200}
                alignItems="right"
              >
                Floating Mentor's Comments:
              </Table.TextCell>
              <Table.TextCell
                flexBasis={200}
                flexShrink={0}
                flexGrow={0}
                size={100}
                width={300}
                height={100}
              >
                {this.state.FloatingMentorComments}
              </Table.TextCell>
            </Table.Row>
          </Table.Body>
        </Pane>   


{getCurrentDate()}
                {console.log(getCurrentDate())}




                      <Pane
          width="auto"
          height="auto"
          marginLeft={40}
          padding={10}
          display="flex"
          flexDirection= "column"
          justifyContent = "space-between"
          borderRadius={3}
          background="blueTint"
        >
          <Heading is="h2">Mentors Comments: </Heading>
          {(selectedStudentProfile) &&                                      
                      (selectedStudentProfile.floatingMentorcomments.map(floatingMentor=>{
                        return(
                          <Pane 
                          elevation={3}                            
                          marginLeft={36}
                          marginBottom = {10}
                          height="auto" 
                          padding={10}
                           width= {400}
                           background="tint2" borderRadius={3}>
                              <Paragraph  marginTop="default">

                            {floatingMentor.comment}
                            </Paragraph>
                            <Text padding={100}> <Strong>Feedback by </Strong> {floatingMentor.floatingMentorName} on {floatingMentor.date}</Text>
                            </Pane>

                       )} ))}

          
                      
            




        </Pane>
*/
