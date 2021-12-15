import React from 'react';
import profileImage from '../../assets/profile/alex.img.jpg';

const About = () => (
    <section className="my-5">
        <h1 id="about">About Me</h1>
        <img src={profileImage} className="my-2" style={{ width: '10%' }} alt="ProfileImg" />
        <div className="my-2">
        <p>
        My name is Alejandro Rosas Machado. I am starting a new career in Software Engineering. I have always had a passion for web development. I grew up in Glendale, Arizona, and currently live there. I work at Ability360 Homecare Services as a Supervisor and I have been working there for 7 years. I inspire to be a well-known software engineer. I have always been into computer software and how its made. Few things about me I am 1 out of 8 children. I was born in Mexico and raise here in Arizona.
    </p>
    </div>
    </section>
);

export default About;