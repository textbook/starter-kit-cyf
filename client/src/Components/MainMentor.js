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
  
  Paragraph } from "evergreen-ui"

export class FloatingMentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentSelected: null,
      selectedStudentProfile: null,
      mentorComments: ' ',
      commentSubmitted: null
    };
  }

  handleStudentSelection = selected => {
    console.log("handleStudentSelection working....")
    this.setState({
      studentSelected: selected,
      mentorComments: null
    });
  };

handleComments = (e) => {
  console.log("handleComments working");
  this.setState({
    mentorComments: this.state.commentSubmitted,
    commentSubmitted: null

  })
}
  
  render() {
     var selectedStudentProfile = mockStudentsProfiles.find(s => {
       return s.name === this.state.studentSelected;
     });
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
             
              items={mockStudentsProfiles.map(s => s.name)}
              height={48}
              onChange={selected => this.handleStudentSelection(selected)}
              placeholder="Students"
              autocompleteProps={{
                title: "Students"
              }}
            />

          </Pane>

        {(selectedStudentProfile) &&   (
         <Pane
         display="flex"
        alignItems="center"
         > 
        <Pane height="auto" width={500} float="left">
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
          size={80}
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
            
            
            <Table.Row intent="success">
              <Table.TextCell flexBasis={200} flexShrink={1} flexGrow={0}>
              Evaluation Summary:
              </Table.TextCell >
              </Table.Row>
              <Table.Row height="auto" paddingY={12}>
              <Paragraph>
                {selectedStudentProfile &&
                  this.state.mentorComments}
                  </Paragraph>
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
      
         <Textarea
      height={200}
      width={400}
      placeholder="Mentor evaluation summary"
      onChange={e => this.setState({ commentSubmitted: e.target.value })}
      // value={this.state.mentorComments}
    />
              <Button
                height={38}
                appearance="primary"
                marginLeft={10}
                onClick={this.handleComments}
              >
                Submit
              </Button>
    
      
      </Pane> )}                                   
      </Pane>

                          

      </div>
    );
  }
}
export default FloatingMentor;


/*


*/