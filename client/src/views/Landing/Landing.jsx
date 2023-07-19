import React from 'react'
import style from "./Landing.module.css"
import { Link } from "react-router-dom";
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import twitter from "../../assets/twitter.png"

function Landing() {
  return (
    <div className={style.landingContainer}>
      <div className={style.landingBack}>
        <h1>CHUCHOS</h1>
        <h3>The dog breeds app</h3>
        <Link to="/home" className={style.landingLink}>
          <button className={style.landingBtn}>Home</button>
        </Link>
        <p className={style.landingContact}>
          <a href="http://github.com/Monicamegarcia"> <img src={github} alt="Github"/> </a>
          <a href="http://www.linkedin.com/in/monicamegarcia/"> <img src={linkedin} alt="LinkedIn"/> </a>
          <a href="https://twitter.com/MonicaMEGarcia?t=4QeehZF4Xh7Q4nua-30eNg&s=08" > <img src={twitter} alt="Twitter"/> </a>
        </p>
      </div>
    </div>
  )
}

export default Landing