import React from 'react';

import Button from '../button';
import './_email.scss';

class Email extends React.Component {
  state = {
    email: '',
    has_submitted: false,
  };
  handleChange = e => {
    this.setState({ email: e.target.value });
  };
  handleJoin = () => {
    if (!this.state.has_submitted) {
      fetch('/add_email?email=' + this.state.email)
          .then(function(response) {
            console.log("Got back something!" + response);
          }.bind(this));
      this.setState({ has_submitted: true });
    }
  };
  render() {
    if (this.state.has_submitted) {
      return (
        <div>
          <p> Submitted, thanks! </p>
        </div>
      );
    } else {
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
}

export default Email;
