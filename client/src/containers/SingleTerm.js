import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./SingleTerm.css";

import { Fetcher } from './fetcher.js';
const fetcher = new Fetcher()

class SingleTerm extends Component {
  constructor(props) {

    super(props);
    this.state = {
      term: null

    }
  }

async componentDidMount(){
  const term = await fetcher.fetchTermByPath(this.props)
  this.setState({
       term: term
     })

}

content = () => {
  if(this.state.term !== null){
    return this.state.term.map((term, index) => {
      return(
        <Fragment key={index}>
        <h2>{term.term}</h2>
        <hr className='term-hr'/>
        <p>{term.definition}</p>
        <h2>Code Example</h2>
        <hr className='term-hr'/>
        <p>{term.code_example}</p>
        <h2>Additional Resources</h2>
          <hr className='term-hr'/>
          <ul>
          {term.resources.map((link, index) => {
            return(
            <li key={index}>{link}</li>
            )
          })

        }
        </ul>
        <h2>Related Terms</h2>
          <hr className='term-hr'/>
          <ul>
          {term.related_terms.map((related, index) => {
            return(
                <li key={index}>{related}</li>

            )

          })}
          </ul>
          </Fragment>



      )
    })
  }
}

render(){
  console.log(this.props)
  console.log(this.state.term)
    return (
      <Fragment >
      <div className="term-wrapper container">
      {(this.state.term === null) ? null:this.content() }
      </div>
      </Fragment>
    );
  }
}


export default SingleTerm;
