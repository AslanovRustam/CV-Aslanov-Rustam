import s from "./skills.module.css";
import { languageSkils, softSkils, techSkils } from "../../data/data";

export default function Skills() {
  return (
    <>
      <div className={s.container}>
        <h2 className={s.title}>Tech Skills</h2>
        <ul className={s.skills}>
          {techSkils.map(({ name, icons }) => (
            <li className={s.contactBox} key={name}>
              <span>{name}</span>
              <span>
                {icons.map((icon, idx) => (
                  <img key={idx} src={icon} alt={name} className={s.icon} />
                ))}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.container}>
        <h2 className={s.title}>Soft Skills</h2>
        <ul className={s.skills}>
          {softSkils.map((item) => (
            <li key={item} className={s.contactBox}>
              {item}
            </li>
          ))}
        </ul>
        <h2 className={s.title}>Language Skills</h2>
        <ul className={s.skills}>
          {languageSkils.map((item) => (
            <li key={item} className={s.contactBox}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
