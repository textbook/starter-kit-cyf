import React, { Component } from "react";
import { majorScale, Button, Pane, TextInputField, FilePicker, Combobox } from 'evergreen-ui'; 
import {Link} from 'react-router-dom';
import "../App.css";


export class StudentPage extends Component {
    constructor(props) {
        super(props);
    }
render() {
 return (
  <div>
  {console.log('working')}
    <h3>STUDENT PROFILE</h3>
    <Pane>
      <TextInputField
         height={48}
         width="75%"
         label="Full Name"
         placeholder="Full Name"/>
        
    <Pane>
    <h5>Upload your photo here:</h5>
     <FilePicker
      multiple
      width="75%"
      marginBottom={32}
      label="Upload your photo here"
      onChange={files => console.log(files)}/>

    <Pane>
    <h5>Select the Technical skills you're working on:</h5>
     <Combobox
      width="75%"
      items={['Arrays', 'Functions', 'Array Methods', 'Objects','None']}
      onChange={selected => console.log(selected)}
      placeholder="Tech Skills"
      label="Technical skills"
      autocompleteProps={{
       // Used for the title in the autocomplete.
      title: 'None'
       }}
       />
    <Pane>
    <h5>Select the Soft skills you're working on:</h5>
     <Combobox
     width="75%"
     items={['Participating in my class', 'Supporting my class', 'Solving problems 1', 'Solving problems 2', 'None']}
     onChange={selected => console.log(selected)}
     placeholder="Soft Skills"
     label="Soft Skills"
     autocompleteProps={{
      // Used for the title in the autocomplete.
     title: 'None'
     }}
     />
    </Pane>
    </Pane>  
    </Pane>
     <Button height={majorScale(5)}>SUBMIT</Button>
    </Pane>
  </div>
 );
}}
    

export default StudentPage;