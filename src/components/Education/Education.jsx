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
            Telecommunications and Network Engineer
          </h5>
        </div>
      </div>
      <div className={s.container}>
        <h3 className={s.title}>Additional Education</h3>
        <div className={s.details}>
          <span className={s.date}>Apr 2020 – Apr 2021 | Ukraine</span>
          <h4 className={s.subTitle}>GO IT</h4>
          <h5 className={s.position}>Full Stack Developer</h5>
        </div>
      </div>
    </section>
  );
}
