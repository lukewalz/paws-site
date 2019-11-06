// Contact.js

import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="container">
        <h2>Contact for more information</h2>
        <form name="contact" method="POST">
          <div className="form-group">
            <label for="name">Your Name:</label>
            <input type="text" class="form-control" name="name" id="name" />
          </div>
          <div className="form-group">
            <label for="email">Your Email:</label>
            <input type="email" name="email" class="form-control" id="email" />
          </div>
          <div className="form-group">
            <label for="message">Message: </label>{" "}
            <textarea
              class="form-control"
              name="message"
              id="message"
              rows="3"
            ></textarea>
          </div>
          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Contact;
