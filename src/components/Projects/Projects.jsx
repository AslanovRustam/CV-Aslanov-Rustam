import s from "./project.module.css";
import { ReactComponent as Tools } from "../../images/tools.svg";
import nda from "../../images/nda.jpg";
import { projectNames } from "../../data/data";
import { PROJECTS } from "../../data/projects";

export default function Projects({ data }) {
  return (
    <>
      <h2 className={s.title}>Latest projects</h2>
      {/* <ul className={s.listNames}>
        {projectNames.map((item) => (
          <li key={item} className={s.listItems}>
            <a target="_blank" href={item}>
              {item}
            </a>
          </li>
        ))}
      </ul> */}
      {/* <ul className={s.list}>
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
      </ul> */}
      <ul className={s.projectList}>
        {PROJECTS.map((item) => (
          <li className={s.projectItem} key={item.name}>
            <p className={s.projectName}>
              {item.name} <span className={s.separator}></span> {item.role}
            </p>
            <p className={s.duration}>{item.duration}</p>
            <ul className={s.job}>
              {item.tasks.map((task) => (
                <li className={s.task} key={task}>
                  {task}
                </li>
              ))}
            </ul>
            {item.impact && item.impact.length > 0 && (
              <>
                <p className={s.impactTitle}>Key impact</p>
                <ul className={s.impactList}>
                  {item.impact.map((point) => (
                    <li className={s.impactItem} key={point}>
                      {point}
                    </li>
                  ))}
                </ul>
              </>
            )}
            <p className={s.stack}>
              <Tools className={s.icon} /> {item.stack}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}
