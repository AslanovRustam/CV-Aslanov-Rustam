import s from "./aboutMyself.module.css";

export default function AboutMuself() {
  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <p className={s.titleName}>Aslanov Rustam</p>
        <h2 className={s.titleJob}>Front-End Developer</h2>
      </div>
      <ul className={s.summary}>
        {/* <li className={s.item}>
          <span className={s.subTitle}>Credo: </span>
          <span className={s.description}>
            Strive for clean, efficient, and user-focused solutions — constantly
            learning to deliver interfaces that are both beautiful and
            impactful.
          </span>
        </li> */}
        <li className={s.item}>
          <span className={s.subTitle}>Goals: </span>
          <span className={s.description}>
            To contribute to products that solve real user problems, enhance
            business value, and continue growing as a front-end engineer
            mastering modern technologies.
          </span>
        </li>
        <li className={s.item}>
          <span className={s.subTitle}>About myself: </span>
          <span className={s.description}>
            Front-end developer with 5 years of experience creating responsive,
            high-performance web applications. Skilled in turning complex
            designs into pixel-perfect, cross-browser solutions using HTML,
            CSS/SCSS/Tailwind, JS/TS, React.js, and Next.js. Experienced in
            integrating REST APIs, Redux, MobX, Zustand and working with UI
            libraries (MaterialUI, AntD, HeroUI). <br></br>Actively leverage
            AI-powered tools (Claude, ChatGPT) in my daily workflow to
            accelerate development and automate routine tasks. Collaborate
            effectively with designers and backend teams to deliver maintainable
            code that meets both user and business needs. Always exploring new
            tools and frameworks to improve product quality and development
            speed.
          </span>
        </li>
      </ul>
    </div>
  );
}
