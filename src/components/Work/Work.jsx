import { salesExperience } from "../../data/data";
import s from "./work.module.css";

function Description({ text }) {
  if (!Array.isArray(text)) {
    return <p className={s.description}>{text}</p>;
  }
  return (
    <ul className={s.bullets}>
      {text.map((item) => (
        <li key={item} className={s.description}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Work({ data }) {
  return (
    <section className={s.section}>
      <h3 className={s.title}>Work Experience</h3>
      <ul>
        {data?.map(({ date, place, position, description, link }) => (
          <li className={s.details} key={`${place}-${date}`}>
            <span className={s.date}>{date}</span>
            <h4 className={s.subTitle}>
              <a className={s.link} target="blank" href={link}>
                {place}
              </a>
            </h4>
            <p className={s.position}>{position}</p>
            <Description text={description} />
          </li>
        ))}
      </ul>

      <div className={s.details}>
        <span className={s.date}>{salesExperience.date}</span>
        <h4 className={s.subTitle}>
          Sales Companies (
          <a className={s.link} target="blank" href="https://www.henkel.ua/">
            Henkel Ukraine
          </a>
          ,&nbsp;
          <a
            target="blank"
            className={s.link}
            href="https://www.colgatepalmolive.com.ua/"
          >
            Colgate-Palmolive
          </a>
          ,&nbsp;
          <a target="blank" className={s.link} href="http://shabo.ua/">
            Shabo
          </a>
          )<span className={s.positionNot}>(not IT)</span>
        </h4>
        <p className={s.position}>{salesExperience.position}</p>
        <Description text={salesExperience.description} />
      </div>
    </section>
  );
}
