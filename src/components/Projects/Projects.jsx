import s from "./project.module.css";
import { ReactComponent as Tools } from "../../images/tools.svg";
import nda from "../../images/nda.jpg";

export default function Projects({ data }) {
  return (
    <>
      <h2 className={s.title}>Some of projects</h2>
      <ul className={s.list}>
        {data.map(({ id, name, image, url, description, stack }) => (
          <li className={s.item} key={id}>
            <a
              className={s.link}
              target={`${url ? "_blank" : "#"}`}
              href={url ? url : "#"}
            >
              {image ? (
                <img className={s.img} src={image} alt={name} />
              ) : (
                <img className={s.img} src={nda} alt={name} />
              )}
              <div className={s.info}>
                <p className={s.name}>{name}</p>
                <p className={s.description}>{description}</p>
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
