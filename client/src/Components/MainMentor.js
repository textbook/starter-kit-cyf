import React, { Component } from "react";
import "../App.css";
import mockStudentsProfiles from "../mockStudentsProfiles.json";
import {
  Button, 
  Pane, 
  Combobox, 
  TextInput, 
  Table, 
  Avatar, 
  Heading,
  Text,
  Strong,
  Textarea,
  
  Paragraph } from "evergreen-ui";


export class FloatingMentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedStudent: null,
      selectedStudentProfile: null,
      mentorComments: 'Mentor Comments',
      commentSubmitted: null
    };
  }

  handyStudent = selected => {
    console.log("handystudent working....")
    this.setState({
      clickedStudent: selected
    });
  };

handyComments = (e) => {
  console.log("handyComments working");
  this.setState({
    mentorComments: this.state.commentSubmitted,
      commentSubmitted: null

  })
}
  
  render() {
     var selectedStudentProfile = mockStudentsProfiles.find(s => {
       return s.name === this.state.clickedStudent;
     } );
     console.log(this.state.mentorComments);
     
    return (
      <div>
        <Pane
          // key={index}
          elevation={4}
          height="auto"
          width="auto"
          padding={20}
          position="center"
          display="flex"
          flexWrap = "wrap"
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
             felx={1}
              items={mockStudentsProfiles.map(s => s.name)}
              height={48}
              onChange={selected => this.handyStudent(selected)}
              placeholder="Students"
              autocompleteProps={{
                title: "Students"
              }}
            />

              {/* <TextInput
                width="100%"
                height={48}
                width={800}
                placeholder="Mentor Summary"
                onChange={e =>
                  this.setState({ commentSubmitted: e.target.value })
                }
              /> */}


    <Textarea
      height={100}
      width={500}
      onChange={e => setState({ mentorComments: e.target.value })}
      value={this.state.mentorComments}
    />
              <Button
                height={48}
                appearance="primary"
                marginTop={20}
                onClick={this.handyComments}
              >
                Submit
              </Button>
          </Pane>

        {(selectedStudentProfile) &&   (
         <Pane> 
        <Pane height={200} width={500} float="left">
        <Avatar
          src={
            selectedStudentProfile
              ? selectedStudentProfile.studentPhoto
              : null
          }
          name={
            selectedStudentProfile
              ? selectedStudentProfile.name
              : null
          }
          size={70}
        />
        <Table.Body>
          <Table.Head>
            <Table.TextCell flexBasis={200} flexShrink={0} flexGrow={0}>
              Student Name:
            </Table.TextCell>
            <Table.TextCell flexBasis={200} flexShrink={0} flexGrow={0}>
              {selectedStudentProfile &&
                selectedStudentProfile.name}
            </Table.TextCell>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.TextCell flexBasis={200} flexShrink={0} flexGrow={0}>
                Students Soft Skill:
              </Table.TextCell>
              <Table.TextCell>
              {selectedStudentProfile &&
                  selectedStudentProfile.softSkills}
              </Table.TextCell>
            </Table.Row>
            <Table.Row>
              <Table.TextCell flexBasis={200} flexShrink={0} flexGrow={0}>
                Students Tech Skill:
              </Table.TextCell>
              <Table.TextCell>
                {selectedStudentProfile &&
                  selectedStudentProfile.techinalSkills}
              </Table.TextCell>
            </Table.Row>
          </Table.Body>
        </Table.Body>
      </Pane>       
      
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
      
      
      
      </Pane> )}                                   

      </Pane>

                          

      </div>
    );
  }
}
export default FloatingMentor;


/*


*/