import Sprite from "../../images/sprite.svg";
import s from "./contacts.module.css";

export default function Contacts() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Contacts</h2>
      <ul className={s.contacts}>
        <li>
          <a
            target="_blank"
            className={s.contactBox}
            href="https://join.skype.com/invite/k09RHhiE2mUV"
          >
            <svg className={s.icon}>
              <use href={`${Sprite}#icon-skype`}></use>
            </svg>
            <span>Рустам Асланов</span>
          </a>
        </li>
        <li>
          <a className={s.contactBox} href="tel:+38 067 310 48 17">
            <svg className={s.icon}>
              <use href={`${Sprite}#icon-mobile`}></use>
            </svg>
            <span>+38 067 310 48 17</span>
          </a>
        </li>

        <li>
          <a className={s.contactBox} href="mailto:aslanovrg@gmail.com">
            <svg className={s.icon}>
              <use href={`${Sprite}#icon-mail`}></use>
            </svg>
            <span>aslanovrg@gmail.com</span>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            className={s.contactBox}
            href="https://github.com/AslanovRustam"
          >
            <svg className={s.icon}>
              <use href={`${Sprite}#icon-github`}></use>
            </svg>
            <span>AslanovRustam</span>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            className={s.contactBox}
            href="https://www.linkedin.com/in/aslanovrustam/"
          >
            <svg className={s.icon}>
              <use href={`${Sprite}#icon-linkedin`}></use>
            </svg>
            <span>Aslanov Rustam</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
