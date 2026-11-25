import s from "./aboutMyself.module.css";

export default function AboutMuself() {
  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <p className={s.titleName}>Aslanov Rustam</p>
        <h2 className={s.titleJob}>
          Senior Front-End Developer | React, Next.js, TypeScript
        </h2>
        <p className={s.description}>EU · Open to remote work / relocate</p>
      </div>
      <ul className={s.summary}>
        <li className={s.item}>
          <span className={s.subTitle}>Summary: </span>
          <span className={s.description}>
            Senior Front-End Developer and Team Lead with 5+ years of commercial
            experience building responsive, high-performance web applications
            with React.js, Next.js (SSR/SSG), TypeScript and JavaScript (ES6+).
            Led a team of 11 front-end developers and delivered 100+ client
            projects, owning estimations, code review and communication with
            clients. Works with Redux Toolkit, MobX and Zustand, REST APIs,
            headless CMS, micro-frontends (Module Federation), Tailwind
            CSS/SCSS, Material UI and Ant Design. Writes unit and integration
            tests with Vitest and E2E tests with Playwright.
            <br />
            Uses Claude, Cursor, ChatGPT and n8n every day to automate routine
            work. Before moving into development, spent 14 years in B2B sales
            at Henkel and Colgate-Palmolive, so client meetings and
            negotiations come naturally.
          </span>
        </li>
      </ul>
    </div>
  );
}
