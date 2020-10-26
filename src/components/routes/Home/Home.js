import React from "react"
import {Link} from "react-router-dom"

const Home = () => {
    return(
        <main className="main--home">
            <section className="landing-section">
                <h1 className="huge-font">Momo</h1>
                <h2 className="slogan">Finde <span className="slogan__highlight">deine</span> Pflanze.</h2>
                <Link to="/pflanzen" className="button button--home">Zur Auswahl</Link>
            </section>
        </main>
    )
}

export default Home