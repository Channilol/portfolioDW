import React, { useEffect, useRef, useState } from "react";
import "./ProjectFrame.css";
import LinkIcon from "../../assets/link_icon.svg";

export default function ProjectFrame({ title, tech, url, image, desc }) {
  const [isInView, setIsInView] = useState(false);
  const frameRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.intersectionRatio >= 0.6);
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "0px",
      }
    );
    if (frameRef.current) observer.observe(frameRef.current);
    return () => {
      if (frameRef.current) observer.unobserve(frameRef.current);
    };
  }, []);

  return (
    <div
      ref={frameRef}
      className={`projectFrame ${isInView ? "illuminated" : ""}`}
    >
      {/* Effetto gradient overlay */}
      <div className="projectGradient"></div>

      {/* Glass border effect */}
      <div className="projectBorder"></div>

      <div className="projectContent">
        {/* Header section */}
        <div className="projectHeader">
          <div className="projectInfo">
            <h3 className="projectTitle">{title}</h3>
            <div className="projectDesc">
              <p>{desc}</p>
            </div>
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
          </div>

          {/* Link al progetto - posizionato in absolute per non influenzare il layout */}
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="projectLink"
            aria-label={`Vai al progetto ${title}`}
          >
            <div className="linkIconWrapper">
              <img src={LinkIcon} alt="Link" width={24} height={24} />
            </div>
          </a>
        </div>

        {/* Wrapper per l'immagine */}
        <div className="projectImageWrapper">
          <div className="imageOverlay"></div>
          <img src={image} alt={title} className="projectImage" />
          <div className="imageGlow"></div>
        </div>
      </div>
    </div>
  );
}
