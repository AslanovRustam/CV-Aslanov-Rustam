import s from "./work.module.css";

export default function Work({ data }) {
  return (
    <section className={s.section}>
      <h3 className={s.title}>Work Experience</h3>
      <ul>
        {data?.map(({ date, place, position, description, link }) => (
          <li className={s.details} key={description}>
            <span className={s.date}>{date}</span>
            <h4 className={s.subTitle}>
              <a className={s.link} target="blank" href={link}>
                {place}
              </a>
            </h4>
            <p className={s.position}>{position}</p>
            <p className={s.description}>{description}</p>
          </li>
        ))}
      </ul>

      <div className={s.details}>
        <span className={s.date}>Mar 2007 - Apr 2021 | Ukraine</span>
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
        <p className={s.position}>
          Various appointments from Consultant to Senior Key Account Manager
        </p>
        <p className={s.description}>
          Building sustainable mutually beneficial customer relationships.
          Development and monitoring implementation of marketing activities
          directed to promote brands and achieve turnover. Training of Key
          Account Executive team
        </p>
      </div>
    </section>
  );
}
