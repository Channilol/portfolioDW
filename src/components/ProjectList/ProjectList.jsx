import "./ProjectList.css";
import ProjectFrame from "../ProjectFrame/ProjectFrame";
import listaProgetti from "../../assets/projects.json";

export default function ProjectList() {
  // Risolviamo dinamicamente le immagini, gestendo sia image_file che image_url
  const projects = listaProgetti.progetti.map((p) => {
    let imageSrc;
    if (p.image_file) {
      // quando JSON ha esplicitamente image_file
      imageSrc = require(`../../assets/progetti/${p.image_file}`);
    } else if (p.image_url) {
      // estrai nome file da un eventuale image_url
      const fileName = p.image_url.split("/").pop();
      imageSrc = require(`../../assets/progetti/${fileName}`);
    } else {
      console.warn(`Progetto ${p.nome} senza immagine definita`);
      imageSrc = "";
    }
    return { ...p, image: imageSrc };
  });

  return (
    <div className="ProjectList">
      {projects.map((progetto) => (
        <ProjectFrame
          key={progetto.nome}
          title={progetto.nome}
          tech={progetto.tech}
          url={progetto.url}
          image={progetto.image}
          desc={progetto.description}
        />
      ))}
    </div>
  );
}
