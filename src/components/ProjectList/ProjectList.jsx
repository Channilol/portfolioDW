import './ProjectList.css'
import ProjectFrame from '../ProjectFrame/ProjectFrame'
import listaProgetti from '../../assets/projects.json'

export default function ProjectList() {
    return (
        <div className="ProjectList">
            {listaProgetti.progetti.map((progetto) => (
                <ProjectFrame key={progetto['nome']} title={progetto['nome']} tech={progetto['tech']} url={progetto['url']} image_url={progetto['image_url']} />
            ))}
        </div>
    )
}
