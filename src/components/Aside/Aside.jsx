import s from "./aside.module.css";
import photo from "../../images/photo.jpg";
import Contacts from "../Contacts/Contacts";
import Skills from "../Skills/Skills";

export default function Aside() {
  return (
    <section className={s.aside}>
      <img className={s.photo} src={photo} alt="avatar" />
      <Contacts />
      <Skills />
    </section>
  );
}
