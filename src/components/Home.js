// Home.js

import { MdAndroid } from "react-icons/md";

import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
<div className="jumbotron">
        <img src={require('../assets/Dog getting Treat v2.png')} style={{width:'100%', height:'100%'}} />
        <p >Preventative Reminder Rewarding Compliance</p>
        </div>
      </div>
    );
  }
}

export default Home;
