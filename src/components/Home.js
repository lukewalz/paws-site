// Home.js

import { MdAndroid } from "react-icons/md";
import { } from '../../src/'
import React, { Component } from "react";
import { FaApple, FaAndroid } from 'react-icons/fa';

var imgUrl = require('../assets/Dog_getting_Treat_v2.png')

class Home extends Component {
  render() {
    return (
      <div style={{ height: 1000 }} className='container-fluid'>
        <div className='containerRow' style={{ backgroundImage: 'url(' + imgUrl + ')', display: 'flex', alignItems: 'center', paddingLeft: 200 }}>
          <div>
            <div>
              <p className='titleText'>Preventative Reminder, <br></br>Rewarding Compliance.</p>
            </div>
            <div>
              <p className='text'>A foolproof reminder for giving your pet's<br></br>preventatives on time and never forget again. </p>
              <button type="button" className="btn btn-danger">DOWNLOAD<FaApple /><FaAndroid /></button>
            </div>

          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <p className='subtitleText' style={{ color: 'black' }}>Why Do We Forget To Give Our Pets' Preventatives</p>
            <p className='text' style={{ color: 'black' }}>Busy with work. Busy with the kids. It’s winter. The spouse is in charge of
            remembering. We all forget and the meds pile up in the drawer.
            paws is a foolproof reminder that rewards better habits and better health
              for your pets.</p>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <img style={{
              maxWidth: '100%'
            }} src={require('../assets/post-it-notes.jpg')} />
          </div>
          <div className="w-100" style={{ height: '100px' }}></div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <img style={{
              maxWidth: '100%'
            }} src={require('../assets/Dog_and_Phone.png')} />
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <p className='subtitleText' style={{ color: 'black' }}>Remembering Made Foolproof</p>
            <p className='text' style={{ color: 'black' }}>Ordinary reminders can be snoozed. Paws’ reminder <u>forces</u> action. When
            paws’ reminder sounds, the only way to snooze the reminder until the
            next due date is to scan your pet’s rabies tag and their scheduled
            preventative. This process forces interaction with your pet and their meds
            ensuring not only administration, but that the correct pet is getting the
                correct preventative. Reminders can no longer be ignored!</p>
            <button type="button" className="btn btn-outline-dark">Try Now</button>
          </div>

        </div>
        <div className='row overlayRow' style={{ backgroundColor: 'gray', justifyContent: 'center', display: 'flex' }}>
          <img className='col-lg-6 col-md-12 col-sm-12' style={{
            maxHeight: '380px'
          }} src={require('../assets/Phone_Screenshots.png')} />
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <p className='subtitleText' >Healthy Habits are Rewarding...
              and Contagious</p>
            <p className='text' >The closer you give preventatives to when
            they’re due, the more reward points you earn.
            See where you rank with your compliance and
            celebrate each month of your pet’s good health.
              Spread the good word and others will follow suit.</p>
            <button type="button" className="btn btn-outline-light">Download</button>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-5 col-md-4 col-sm-12' style={{ textAlign: 'center' }}>
            <img style={{
              maxHeight: '200px'
            }} src={require('../assets/Dog_Phone_Logo.png')} />
            <p>Remind.</p>
          </div>
          <div className='col-lg-2 col-md-4 col-sm-12' style={{ textAlign: 'center' }}>
            <img style={{
              maxHeight: '200px'
            }} src={require('../assets/Cat_Treat.jpg')} />
            <p>Administer.</p>
          </div>
          <div className='col-lg-5 col-md-4 col-sm-12' style={{ textAlign: 'center' }}>
            <img style={{
              maxHeight: '200px'
            }} src={require('../assets/Dog_kiss.jpg')} />
            <p>Rewards.</p>
          </div>
          <div style={{ width: '100%', height: '70px' }}></div>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <p className='subtitleText' style={{ color: 'black', textAlign: 'center' }}>More Than Your Foolproof Reminder</p>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12' style={{ textAlign: 'center', flexDirection: 'row' }}>

            <p className='text' style={{ color: 'black', textAlign: 'center' }}>            <img style={{
              maxHeight: '50px'
            }} src={require('../assets/Red_Check_Gray_Circle.png')} />Paws ensures the correct preventative is being given to the correct pet.</p>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12' style={{ textAlign: 'center', flexDirection: 'row' }}>

            <p className='text' style={{ color: 'black', textAlign: 'center' }}>            <img style={{
              maxHeight: '50px'
            }} src={require('../assets/Red_Check_Gray_Circle.png')} />Keeps track of your inventory. Paws will alert you of expiration dates and when running low.</p>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12' style={{ textAlign: 'center', flexDirection: 'row' }}>

            <p className='text' style={{ color: 'black', textAlign: 'center' }}>            <img style={{
              maxHeight: '50px'
            }} src={require('../assets/Red_Check_Gray_Circle.png')} />Paws clears any confusion over dosing (monthly? with food?) and which preventatives are for which parasites.</p>
          </div>
        </div>
        <div className='row overlayRow' style={{ backgroundColor: 'maroon' }}>
          <div className='col-lg-5 col-md-5 col-sm-12'>
            <p className='subtitleText'>Rest easy. <br></br>Paws has you covered</p>
            <p className='text'>            <img style={{
              maxHeight: '25px'
            }} src={require('../assets/Red_Check.png')} />Preventatives given on time</p>
            <p className='text'><img style={{
              maxHeight: '25px'
            }} src={require('../assets/Red_Check.png')} />Dosing directions and history</p>
            <p className='text'><img style={{
              maxHeight: '25px'
            }} src={require('../assets/Red_Check.png')} />Inventory management</p>

            <button type="button" className="btn btn-danger">DOWNLOAD<FaApple /><FaAndroid /></button>
          </div>
          <div className='col-lg-7 col-md-7 col-sm-12'>
            <img style={{
              height: '100%', width: '100%', display: 'block', margin: '20px'
            }} src={require('../assets/Cat_sleep_bed.jpg')} />
          </div>

        </div>
        <div className='row' style={{ marginTop: '12em', marginBottom: '12em' }}>
          <div className='col-lg-6 col-md-6 col-sm-12' style={{ alignContent: 'center', alignItems: 'center', display: 'flex', justifyContent: 'space-around' }}>
            <img src={require("../assets/Get_your_paws_on_it.png")} style={{ maxHeight: 200 }} />

          </div>
          <div className='col-lg-6 col-md-6 col-sm-12' style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', alignContent: 'center' }}>
            <p className='subtitleText' style={{ color: 'black', textAlign: 'center' }}><font color="red">p</font>
              reventatives</p>
            <p className='subtitleText' style={{ color: 'black', textAlign: 'center' }}><font color="red">a</font>
              dministered</p>
            <p className='subtitleText' style={{ color: 'black', textAlign: 'center' }}><font color="red">w</font>
              hen</p>
            <p className='subtitleText' style={{ color: 'black', textAlign: 'center' }}><font color="red">s</font>
              cheduled</p>
            <button type="button" className="btn btn-danger">DOWNLOAD<FaApple /><FaAndroid /></button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
