import React from 'react'
import './ProjectFrame.css'

export default function ProjectFrame({ title }) {
    return (
        <div className="projectFrame">
            <div className="projectContent">
                <p className='projectTitle'>{title}</p>
            </div>
        </div>
    )
}
