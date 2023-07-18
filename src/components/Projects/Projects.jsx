import s from "./project.module.css";
import { ReactComponent as Descr } from "../../images/description.svg";
import { ReactComponent as Tools } from "../../images/tools.svg";

export default function Projects({ data }) {
  return (
    <>
      <h2 className={s.title}>Projects</h2>
      <ul className={s.list}>
        {data.map(({ id, name, image, url, description, stack }) => (
          <li className={s.item} key={id}>
            <a className={s.link} target="_blank" href={url}>
              <img className={s.img} src={image} alt={name} />
              <div className={s.info}>
                <p className={s.name}>{name}</p>
                <p className={s.description}>
                  <Descr className={s.icon} /> {description}
                </p>
                <p className={s.stack}>
                  <Tools className={s.icon} /> {stack}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
