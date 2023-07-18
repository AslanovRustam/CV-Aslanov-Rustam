import AboutMuself from "../AboutMyself/AboutMuself";
import Projects from "../Projects/Projects";
import s from "./main.module.css";
import { projects } from "../../data/data";

export default function Main() {
  return (
    <section className={s.section}>
      <AboutMuself />
      <Projects data={projects} />
    </section>
  );
}
