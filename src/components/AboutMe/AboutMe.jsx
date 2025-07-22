import React from 'react'
import './AboutMe.css'

export default function AboutMe() {
    return (
        <section className="about-container">
            <div className="about-content">
                <div className="about-header">
                    <h1>Chi sono?</h1>
                    <div className="header-accent"></div>
                </div>

                <div className="about-main">
                    <div className="intro-card">
                        <p className="intro-text">
                            Sono un ragazzo di 27 anni con formazione da perito grafico e un master in Full Stack Development
                            conseguito presso Epicode, della durata di 6 mesi full time (8 ore al giorno).<br/>
                            Ho frequentato l'universitá degli stranieri di Perugia dove ho studiato comunicazione pubblicitaria, ma ho abbandonato gli studi per seguire la mia passione, ovvero il mondo del codice e del tech.<br/>
                            Oltre all'italiano che é la mia lingua nativa, parlo molto bene inglese (livello B2/C1), spagnolo e giapponese (livello A1)
                        </p>
                    </div>

                    <div className="experience-card">
                        <div className="card-icon">
                            <span>💻</span>
                        </div>
                        <div className="card-content">
                            <h3>Cosa faccio?</h3>
                            <p>
                                Da luglio 2024 ad oggi lavoro come Fullstack developer, utilizzando principalmente Flutter e Node.js, con un focus per la progettaono e realizzazione di interfacce
                                UI/UX moderne, accattivanti ed estremamente intuitive.
                            </p>
                        </div>
                    </div>

                    <div className="skills-grid">
                        <div className="skill-card">
                            <div className="skill-icon">🎨</div>
                            <h4>Design</h4>
                            <p>UI/UX moderne e intuitive</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon">📱</div>
                            <h4>Mobile</h4>
                            <p>Flutter & Dart</p>
                        </div>
                        <div className="skill-card">
                            <div className="skill-icon">⚡</div>
                            <h4>Full Stack</h4>
                            <p>Sviluppo completo</p>
                        </div>
                    </div>

                    <div className="personal-card">
                        <div className="personal-content">
                            <h3>Oltre il codice</h3>
                            <p>
                                Appassionato di tecnologia, creativo per natura e amante degli animali,
                                dedico il mio tempo libero al mio cagnolino Brownie e al costante
                                aggiornamento nel mondo tech.
                            </p>
                            <div className="personal-tags">
                                <span className="tag">🐕 Dog lover</span>
                                <span className="tag">🚀 Tech enthusiast</span>
                                <span className="tag">🎯 Creative</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}