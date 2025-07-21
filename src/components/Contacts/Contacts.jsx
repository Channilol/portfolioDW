import React from 'react'
import './Contacts.css'

export default function Contacts() {
    return (
        <section className="contacts-container">
            <div className="contacts-content">
                <div className="contacts-header">
                    <h1>Contacts</h1>
                    <div className="header-accent"></div>
                </div>

                <div className="contacts-buttons">
                    <a
                        href="mailto:fcannizzo97@gmail.com"
                        className="contact-btn email-btn"
                        aria-label="Invia email"
                    >
                        <div className="btn-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="btn-text">Email</span>
                    </a>

                    <a
                        href="https://linkedin.com/in/francesco-cannizzo-39313a181/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-btn linkedin-btn"
                        aria-label="Vai al profilo LinkedIn"
                    >
                        <div className="btn-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="btn-text">LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/Channilol"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-btn github-btn"
                        aria-label="Vai al profilo GitHub"
                    >
                        <div className="btn-icon">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 19C4 20.5 4 16.5 2 16M22 16V21C22 21.5304 21.7893 22.0391 21.4142 22.4142C21.0391 22.7893 20.5304 23 20 23H16C15.4696 23 14.9609 22.7893 14.5858 22.4142C14.2107 22.0391 14 21.5304 14 21V19.58C14.0135 19.0891 13.9014 18.6026 13.6739 18.1674C13.4464 17.7321 13.1103 17.3623 12.695 17.095C16.07 16.73 19.62 15.38 19.62 9.04998C19.6174 7.68772 19.0979 6.37925 18.175 5.38498C18.6042 4.20277 18.5793 2.90055 18.105 1.73598C18.105 1.73598 16.965 1.37098 14 3.37098C11.4673 2.73633 8.79273 2.73633 6.26 3.37098C3.295 1.37098 2.155 1.73598 2.155 1.73598C1.68071 2.90055 1.65576 4.20277 2.085 5.38498C1.15621 6.38401 0.634776 7.69991 0.64 9.06898C0.64 15.37 4.19 16.72 7.565 17.12C7.15726 17.3823 6.82531 17.7455 6.60323 18.1729C6.38116 18.6004 6.27661 19.0784 6.3 19.56V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className="btn-text">GitHub</span>
                    </a>
                </div>
            </div>
        </section >
    )
}