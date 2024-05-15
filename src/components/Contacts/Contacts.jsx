import { contacts } from "../../data/data";
import s from "./contacts.module.css";

export default function Contacts() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Contacts</h2>
      <ul className={s.contacts}>
        {contacts.map(({ name, icon, link }) => {
          return (
            <li key={name}>
              <a className={s.contactBox} href={link} target="_blank">
                <img src={icon} alt={name} className={s.icon} />
                <span>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
