import s from "./aboutMyself.module.css";

export default function AboutMuself() {
  return (
    <div className={s.container}>
      <h2 className={s.titleJob}>Front-End Developer</h2>
      <p className={s.titleName}>Aslanov Rustam</p>
      <ul className={s.summary}>
        <li className={s.item}>
          <span className={s.subTitle}>Credo: </span>
          <span className={s.description}>
            never stop learning and make the world beautiful
          </span>
        </li>
        <li className={s.item}>
          <span className={s.subTitle}>Goals: </span>
          <span className={s.description}>
            be helpful in resolving customer issues, continue to develop at the
            IT field
          </span>
        </li>
        <li className={s.item}>
          <span className={s.subTitle}>About myself: </span>
          <span className={s.description}>
            as a front-end developer, I have worked on a variety of projects,
            including single-page and multi-page web applications. My experience
            allowed me to create visually appealing and user-friendly websites.
            I actively interact with designers and back-end developers to
            implement new features. I am comfortable working with version
            control systems such as Git and am always looking to improve my
            skills through online courses and workshops.
          </span>
        </li>
      </ul>
    </div>
  );
}
