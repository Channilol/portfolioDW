import React, { useEffect, useRef, useState } from 'react'
import './ProjectFrame.css'
import LinkIcon from '../../assets/link_icon.svg'

export default function ProjectFrame({ title, tech, url, image }) {
    const [isInView, setIsInView] = useState(false)
    const frameRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.intersectionRatio >= 0.6)
            },
            {
                threshold: [0, 0.25, 0.5, 0.75, 1],
                rootMargin: '0px'
            }
        )
        if (frameRef.current) observer.observe(frameRef.current)
        return () => {
            if (frameRef.current) observer.unobserve(frameRef.current)
        }
    }, [])

    return (
        <div
            ref={frameRef}
            className={`projectFrame ${isInView ? 'illuminated' : ''}`}
        >
            <div className="projectContent">
                {/* Wrapper per l’immagine */}
                <div className="projectImageWrapper">
                    <img src={image} alt={title} className="projectImage" />
                </div>

                {/* Titolo */}
                <p className="projectTitle">{title}</p>

                {/* Tecnologie */}
                <div className="projectTech">
                    {tech.map((t, i) => (
                        <span
                            key={i}
                            className="techItem"
                            style={{ backgroundColor: t.color }}
                        >
                            {t.title}
                        </span>
                    ))}
                </div>

                {/* Link al progetto */}
                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="projectLink"
                >
                    <img src={LinkIcon} alt="Link" width={36} height={36} />
                </a>
            </div>
        </div>
    )
}
