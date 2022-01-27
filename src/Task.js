import './Task.scss';
import React from 'react';

function Task(props) {
  const showDropdown = () => {
    alert('dropdown!!');
  }
  const btnFacebook = () => {
    alert('facebook!!');
  }
  const btnTwitter = () => {
    alert('twitter!!');
  }
  const btnInstagram = () => {
    alert('instagram!!');
  }
  const btnYoutube = () => {
    alert('youtube!!');
  }
  const btnOutline = () => {
    alert('outline!!');
  }
  
  const btnFollow = () => {
    document.getElementById("btn-follow").innerHTML = "<ion-icon name='checkmark-outline'></ion-icon> Following";
    document.getElementById("btn-follow").style = "background-color: #E7E7E7; font-size: 12px; color: #737373";
  }
  
  return (
    <div class="container">
        <div class="cover">
            <div class="label">
                <div class="creator-tag">
                  <ul class="dropbtn icons btn-right" onClick={showDropdown}>
                      <li></li>
                      <li></li>
                      <li></li>
                  </ul>
                </div>
            </div>
            <img src={props.banner} alt="banner" class="banner-img" />
        </div>

        <div class="avatar">
            <img src={props.profile} alt="profile" class="profile-img" />
            <button class="btn-follow" id="btn-follow" onClick={btnFollow}>
                <ion-icon name="person-add"></ion-icon> Follow
            </button>
        </div>

        <div class="profile">
            <p class="name">{props.name} <span class="username">{props.username}</span></p>
            <p class="description">{props.description}</p>
            <p class="followers">
              <span class="count">{props.count}</span> Followers 
              <span class="dot"></span>
              <span class="job">{props.job}</span>
            </p>
            <div class="social-media-account">
              <button type="button" class="btn-facebook" onClick={btnFacebook}>
                <ion-icon name="logo-facebook" class="logo-facebook"></ion-icon>
              </button>
              <button class="btn-twitter" onClick={btnTwitter}>
                <ion-icon name="logo-twitter" class="logo-twitter"></ion-icon>
              </button>
              <button class="btn-instagram" onClick={btnInstagram}>
                <ion-icon name="logo-instagram" class="logo-instagram"></ion-icon>
              </button>
              <button class="btn-youtube" onClick={btnYoutube}>
                <ion-icon name="logo-youtube" class="logo-youtube"></ion-icon>
              </button>
              <button class="btn-outline" onClick={btnOutline}>
                <ion-icon name="link-outline" class="logo-outline"></ion-icon>
              </button>
            </div>
        </div>
    </div>
  );
}

export default Task;
