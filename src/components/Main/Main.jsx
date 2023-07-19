import AboutMuself from "../AboutMyself/AboutMuself";
import Projects from "../Projects/Projects";
import Work from "../Work/Work";
import Education from "../Education/Education";
import { projects, experience } from "../../data/data";
import s from "./main.module.css";

export default function Main() {
  return (
    <section className={s.section}>
      <AboutMuself />
      <Projects data={projects} />
      <Work data={experience} />
      <Education />
    </section>
  );
}
