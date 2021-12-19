import React from "react";
import HeaderPic from '../../assets/profile/HeaderImg.png'

const Home = (props) => (
  <section>
    <img alt={props} src={HeaderPic} className="my-1"></img>
  </section>
);

export default Home;