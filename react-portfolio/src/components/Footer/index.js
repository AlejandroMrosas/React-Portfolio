import React from 'react';
// import GithubIcon from '../../assets/Logos/GitHub_Logo_White.jpg'
// import LinkedInIcon from '../../assets/Logos/LinkedIn.jpg'

const Footer = (props) => {
const styles = {
  background: "green",
  position: "fixed",
  width: "100%",
  bottom: "0",
  color: "white",
  fontSize: "20px"
}
return (
<footer className="footer" style={styles}>
  <p>Alejandro Rosas Machado</p>
  </footer>
  )
}

export default Footer;