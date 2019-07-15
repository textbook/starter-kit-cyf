import React, { Component, Fragment } from "react";



class AddNewResource extends Component {
  constructor(props) {

    super(props);
    this.state = {
      Resource: ['default']

    }
  }


addNew = e => {
  this.setState((prevState) => ({
  Resource: [...prevState.Resource, 'new'],
}));
}

callback = (e) => {
  e.preventDefault()
  const value = e;
  this.props.controlFunc(e.target.value, this.props.name, event.target.name)
}


ResourceContent = () => {
  return this.state.Resource.map((single, index) => {
    let resId = `Resource-${index}`
    return(
      <Fragment key={index}>
<div className="loginEmail">
      <label htmlFor="Resource">Resource URL</label>
      <input
        placeholder='Resource URL'
        type='text'
        name={`resource_URL${index}`}
        noValidate
        onChange={this.callback}
      />
</div>

      </Fragment>


    )
  })
  }


    render() {
        return (
          <Fragment>

          {(this.state.Resource === null) ? null:this.ResourceContent() }
          <div onClick={this.addNew} className='plus'>+</div>
          </Fragment>
        );
    }
}

export default AddNewResource
