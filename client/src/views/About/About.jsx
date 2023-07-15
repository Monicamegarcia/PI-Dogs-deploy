import style from "./About.module.css"
import about from "../../assets/about.jpg"
import html5 from "../../assets/html5.jpg"
import css3 from "../../assets/css3.jpg"
import javascript from "../../assets/javascript.jpg"
import react from "../../assets/react.jpg"
import redux from "../../assets/redux.jpg"
import nodejs from "../../assets/nodejs.jpg"
import expressjs from "../../assets/expressjs.jpg"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"


function About() {
  return (
    <div className={style.aboutContainer}>

      <div className={style.aboutImg}>
        <img src={about} alt='Mi foto' />
      </div>

      <div className={style.aboutInfo}>
        <p>
          Hi! My name is Monica Garcia.
        </p>
        <p>
          I´m Industrial Engineer, specialized in process improvement, upskilling me to be Fullstack Dev.
        </p>
        <p>
          DEVELOPED WITH
        </p>
        <p className={style.aboutTech}>
          <img src={html5} alt="HTML5"/>
          <img src={css3} alt="CSS3"/>
          <img src={javascript} alt="JavaScript"/>
          <img src={react} alt="React"/>
          <img src={redux} alt="Redux"/>
          <img src={nodejs} alt="NodeJS"/>
          <img src={expressjs} alt="ExpressJS"/>
        </p>
        <p>Contact Me</p>
        <p className={style.aboutContact}>
          <a href="http://github.com/Monicamegarcia"> <img src={github} alt="Github"/> </a>
          <a href="http://www.linkedin.com/in/monicamegarcia/" > <img src={linkedin} alt="LinkedIn"/> </a>
          <a href="https://twitter.com/MonicaMEGarcia?t=4QeehZF4Xh7Q4nua-30eNg&s=08"> <img src={instagram} alt="Twitter"/> </a>
        </p>
      </div>

    </div>
  );
}

export default About;
