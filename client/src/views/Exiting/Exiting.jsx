import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./Exiting.module.css"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import twitter from "../../assets/twitter.png"

function Exiting () {

  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate('/')
    }, 10000);

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <div className={style.exitingContainer}>
      <div className={style.exitingBack}>
        <h3>You are leaving CHUCHOS!</h3>
        <h3>Soy Henry Bootcamp</h3>
          <h3>For more information visit</h3>
        <p className={style.exitingContact}>
          <a href="http://github.com/Monicamegarcia" > <img src={github} alt="Github"/> </a>
          <a href="http://www.linkedin.com/in/monicamegarcia/" > <img src={linkedin} alt="LinkedIn"/> </a>
          <a href="https://twitter.com/MonicaMEGarcia?t=4QeehZF4Xh7Q4nua-30eNg&s=08" > <img src={twitter} alt="twitter"/> </a>
        </p>
      </div>
    </div>
  )
}

export default Exiting;