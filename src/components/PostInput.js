import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostInput extends Component {

  switchButtons() {
    let y = document.getElementById('button1');
    y.style.display === 'block'
      ? y.style.display = 'none'
      : y.style.display = 'block';

    let z = document.getElementById('button2');
    z.style.display === 'none'
      ? z.style.display = 'block'
      : z.style.display = 'none';
  }

  toggleForm() {
    let x = document.getElementById('newPost');
    x.style.display === 'none'
      ? x.style.display = 'block'
      : x.style.display = 'none';
  }

  render() {
    const { handleSubmit } = this.props;

    let formStyle = {
      display: 'none'
    }

    let button1Style = {
      display: 'block'
    }

    let button2Style = {
      display: 'none'
    }

    return (
      <div>
        <div className="pull-right">
          <p>
            <button style={button1Style} id="button1" className="btn btn-outline-primary" onClick={() => { this.toggleForm(); this.switchButtons() }}>+</button>

            <button style={button2Style} id="button2" className="btn btn-outline-primary" onClick={() => { this.toggleForm(); this.switchButtons() }}>-</button>
          </p>
        </div>

        <form style={formStyle} id="newPost" className="row form-group">
          <div className="col-md-12">
            <Field name="name" component="input" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product" />
            <br />

            <Field name="year" component="input" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Year Released" />

            <br />

            <Field name="price" component="input" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Price" />

            <br />

            <Field name="imageUrl" component="input" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Image Url" />

            <br />


            <button onClick={() => { handleSubmit(); this.toggleForm(); this.switchButtons() }} type="button" id="buttony" className="btn btn-outline-primary">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

PostInput = reduxForm({ form: 'equipment' })(PostInput);

export default PostInput;
