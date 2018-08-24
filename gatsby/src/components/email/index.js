import React from 'react';

import Button from '../button';
import './_email.scss';

class Email extends React.Component {
  state = {
    email: '',
  };
  handleChange = e => {
    this.setState({ email: e.target.value });
  };
  handleJoin = () => {
    if (this.props.onSubmit) {
      this.props.onSubmit(this.state.email);
    }
  };
  render() {
    return (
      <form className="Email">
        <div className="form-row align-items-center">
          <div className="col">
            <label className="sr-only" htmlFor="inlineFormInputEmail">
              Your Email
            </label>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputEmail"
              placeholder="Your Email"
              value={this.state != null ? this.state.email : ''}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-auto">
            <Button type="button" onClick={this.handleJoin}>
              Join
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

export default Email;
