import s from "./education.module.css";

export default function Education() {
  return (
    <section className={s.section}>
      <div className={s.container}>
        <h3 className={s.title}>Education</h3>
        <div className={s.details}>
          <span className={s.date}>Sep 2002 – Jun 2007 | Ukraine</span>
          <h4 className={s.subTitle}>
            A.S.Popov Odessa National Academy of Telecommunications
          </h4>
          <h5 className={s.position}>
            Master's degree, Telecommunications and Network Engineering
          </h5>
        </div>
      </div>
      <div className={s.container}>
        <h3 className={s.title}>Certifications</h3>
        <div className={s.details}>
          <span className={s.date}>Apr 2020 - Apr 2021 | Ukraine</span>
          <h4 className={s.subTitle}>GoIT</h4>
          <h5 className={s.position}>
            Full Stack Developer Certificate (JavaScript, React, Node.js)
          </h5>
        </div>
      </div>
    </section>
  );
}
