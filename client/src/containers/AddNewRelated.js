import React, { Component, Fragment } from "react";



class AddNewRelated extends Component {
  constructor(props) {

    super(props);
    this.state = {
      related: ['default']

    }
  }


addNew = e => {
  this.setState((prevState) => ({
  related: [...prevState.related, 'new'],
}));
}

callback = (e) => {
  e.preventDefault()
  const value = e;
  this.props.controlFunc(e.target.value, this.props.name, event.target.name)
}


RelatedContent = () => {
  return this.state.related.map((single, index) => {
    let resId = `Related-${index}`
    return(
      <Fragment key={index}>
<div className="loginEmail">
      <label htmlFor="Related">Related Term</label>
      <input
        placeholder='Related Term'
        type='text'
        name={`related_term${index}`}
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

          {(this.state.related === null) ? null:this.RelatedContent() }
          <div onClick={this.addNew} className='plus'>+</div>
          </Fragment>
        );
    }
}

export default AddNewRelated
