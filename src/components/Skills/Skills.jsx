import s from "./skills.module.css";
import Sprite from "../../images/sprite.svg";
import parcel from "../../images/parcel.png";
import gitLab from "../../images/gitLab.png";
import ts from "../../images/Typescript_logo_2020.svg";
import next from "../../images/nextjs.png";

export default function Skills() {
  return (
    <>
      <div className={s.container}>
        <h2 className={s.title}>Tech Skills</h2>
        <ul className={s.skills}>
          <li className={s.contactBox}>
            <span>HTML5</span>
            <svg className={s.icon}>
              <use href={`${Sprite}#icon-html5`}></use>
            </svg>
          </li>
          <li className={s.contactBox}>
            <span>CSS3, SCSS</span>
            <span>
              <svg className={s.icon}>
                <use href={`${Sprite}#icon-css3`}></use>
              </svg>
              <svg className={s.icon}>
                <use href={`${Sprite}#icon-sass`}></use>
              </svg>
            </span>
          </li>
          <li className={s.contactBox}>
            <span>JS, TS</span>
            <svg className={s.icon}>
              <use href={`${Sprite}#icon-javascript`}></use>
            </svg>{" "}
            <img className={s.img} src={ts} alt="TS icon" />
          </li>
          <li className={s.contactBox}>
            <span>React, Redux, RTK</span>
            <span>
              <svg className={s.icon}>
                <use href={`${Sprite}#icon-react`}></use>
              </svg>
              <svg className={s.icon}>
                <use href={`${Sprite}#icon-redux`}></use>
              </svg>
            </span>
          </li>
          <li className={s.contactBox}>
            <span>Next.js</span>
            <img className={s.img} src={next} alt="next.js icon" />
          </li>
          <li className={s.contactBox}>
            <span>Node.js(beginer)</span>
            <svg className={s.icon}>
              <use href={`${Sprite}#icon-node`}></use>
            </svg>
          </li>
          <li className={s.contactBox}>
            <span>Git, GitHub, GitLab</span>
            <span>
              <svg className={s.icon}>
                <use href={`${Sprite}#icon-git`}></use>
              </svg>
              <svg className={s.icon}>
                <use href={`${Sprite}#icon-github`}></use>
              </svg>
              {/* <svg className={s.icon}>
                <use href={`${Sprite}#icon-netlify`}></use>
              </svg> */}
              <img className={s.img} src={gitLab} alt="gitlab icon" />
            </span>
          </li>
          <li className={s.contactBox}>
            <span>WebPack, Parcel</span>
            <span>
              <svg className={s.icon}>
                <use href="./images/sprite.svg#icon-webpack"></use>
                <use href={`${Sprite}#icon-webpack`}></use>
              </svg>
              <img className={s.img} src={parcel} alt="parcel icon" />
            </span>
          </li>
          <li className={s.contactBox}>
            <span>Agile, Scrum</span>
            <svg className={s.icon}>
              <use href="#"></use>
            </svg>
          </li>
        </ul>
      </div>
      <div className={s.container}>
        <h2 className={s.title}>Soft Skills</h2>
        <ul className={s.skills}>
          <li className={s.contactBox}>Teamwork</li>
          <li className={s.contactBox}>Time management</li>
          <li className={s.contactBox}>Attention to detail</li>
          <li className={s.contactBox}>Self motivation</li>
          <li className={s.contactBox}>Problem solving</li>
          <li className={s.contactBox}>Honesty</li>
        </ul>
        <h2 className={s.title}>Language Skills</h2>
        <ul className={s.skills}>
          <li className={s.contactBox}>Ukrainian native</li>
          <li className={s.contactBox}>Russian fluent</li>
          <li className={s.contactBox}>English intermediate</li>
        </ul>
      </div>
    </>
  );
}
