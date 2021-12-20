import React from 'react';
import PasswordGen from '../../assets/PortfolioImg/Challenge/PasswordGen.jpg';
import Quiztimes from '../../assets/PortfolioImg/Challenge/QuizTime.jpg';
import ReadMe from '../../assets/PortfolioImg/Challenge/ReadMe.jpg';
import WeatherApi from '../../assets/PortfolioImg/Challenge/WeatherApi.jpg';
import Weekly from '../../assets/PortfolioImg/Challenge/WeeklySchedule.jpg';
import NPSCamping from '../../assets/PortfolioImg/Challenge/NPSCamping.jpg';




const PhotoList = (props) => {

  const customStyle =  {
    alignSelf: 'center',
    height: 350,
    width: 350,
    borderWidth: 1,
    borderRadius: 15,
    margin: 7

  }
   return (
    <section className="flex-row" >
          <a href="https://github.com/ForeytKL22/NPS-Camping">
            <img alt={props} src={NPSCamping} style={customStyle}/></a>
          <a href="https://github.com/AlejandroMrosas/Password-Generator">
          <img alt={props} src={PasswordGen} style={customStyle}/></a>
          <a href='https://github.com/AlejandroMrosas/Quiz-time'>
          <img alt={props} src={Quiztimes} style={customStyle}/></a>
          <a href='https://github.com/AlejandroMrosas/ReadMe-Gen'>
          <img alt={props} src={ReadMe} style={customStyle}/></a>
          <a href='https://github.com/AlejandroMrosas/Weather-Report'>
          <img alt={props} src={WeatherApi} style={customStyle}/></a>
          <a href='https://github.com/AlejandroMrosas/Weekly-Schedule'>
          <img alt={props} src={Weekly} style={customStyle}/></a>
      </section>
  );
  };
export default PhotoList;