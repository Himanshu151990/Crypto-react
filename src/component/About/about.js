import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
<div className="row about mt-3">
    <div className="col-sm-10 mx-auto about-section pb-5">
      <h3 className="sec-title">About Us</h3>
      <p>CryptoCrunch App is the Most Trusted Cryptocurrency and Blockchain NEWS Aggregator App to stay Updated in Cryptocurrency and Blockchain world with all latest NEWS, Crypto coins rates and market analysis from all over World. Crypto Crunch App makes you smarter & informed to take better Bitcoin & Altcoins buy sell and HoDLing decisions. App is your Perfect Cryptocurrency and Blockchain market Companion to get all updates at one place.</p>
    </div>
    <div className="col-sm-10 mx-auto about-section pb-5 pt-5">
      <h3 className="sec-title">Contact Us</h3>
      <p>Want to connect with us or Have a question or want to advertise/partnered with us? Just shoot a Email on our Email: info@cryptocrunchapp.com . P.s receive an awful lot of requests so please bear with us.</p>
      <a href="mailto:info@cryptocrunchapp.com" className="mt-4 btn btn-outline-primary btn-lg">Contact Crypto Crunch</a>
    </div>
    <div className="col-sm-10 mx-auto about-section pb-5 pt-5">
      <h3 className="sec-title">Our Telegram Partners</h3>
      <div className="col-md-3">
        <a href="https://t.me/crypto_news" target="_blank"><img className="mt-3 btn img-fluid" src="https://i.imgur.com/jb69AdC.png" alt="CoinCoach" rel="nofollow"/></a>
      </div>
    </div>
    <div className="col-sm-10 mx-auto about-section pb-5 pt-5">
      <h3 className="sec-title">Our Social Media Partners</h3>
      <div className="row"> 
        <div className="col-md-3">
          <a href="https://www.instagram.com/litecoinofficial/" target="_blank"><img className="mt-3 btn img-fluid" src={require('../../assets/img/LitecoinOfficial_logo.png')} alt="CoinCoach" rel="nofollow"/></a>
        </div>
        <div className="col-md-3">
          <a href="https://instagram.com/cryptoworld.info/" target="_blank"><img className="mt-3 btn img-fluid" src={require('../../assets/img/cryptoworld.png')} alt="CoinCoach" rel="nofollow"/></a>
        </div>
        <div className="col-md-3">
          <a href="https://www.instagram.com/TheWolfOfBitcoins/" target="_blank"><img className="mt-3 btn img-fluid" src={require('../../assets/img/Rv5FSFu.png')} alt="CoinCoach" rel="nofollow"/></a>
        </div>
        <div className="col-md-3">
          <a href="https://www.instagram.com/investedcrypto/" target="_blank"><img className="mt-3 btn img-fluid" src={require('../../assets/img/invested_crypto.png')} alt="CoinCoach" rel="nofollow"/></a>
        </div>
      </div>
    </div>
    <div className="col-sm-10 mx-auto about-section pb-5 pt-5">
      <h3 className="sec-title">Our News Partners</h3>
      <a href="https://cryptodaily.co.uk/" target="_blank"><img className="mt-3 btn img-fluid" src={require('../../assets/img/crypto-daily-big-with-R.png')} /></a>
    </div>
    <div className="col-sm-10 mx-auto d-flex justify-content-end p-1">
        <a href="policy.js">Privacy Policy</a>
    </div>
</div>

  )
}
export default About;