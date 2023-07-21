import Contacts from "../Contacts/Contacts";
import Skills from "../Skills/Skills";
import photo from "../../images/photo.jpg";
import s from "./aside.module.css";

export default function Aside() {
  return (
    <section className={s.aside}>
      <img className={s.photo} src={photo} alt="avatar" />
      <Contacts />
      <Skills />
      <p className={s.mobSubTitle}>Front-End Developer</p>
    </section>
  );
}
