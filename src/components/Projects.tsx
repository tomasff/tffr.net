import * as React from "react"
import Project from "./Project"

const Projects = () => (
    <>
        <Project
            name="Large Data Collider"
            description="Discord data collection and visualisation using TimescaleDB and Grafana"
            url="https://github.com/tomasff/large-data-collider"
        />

        <Project
            name="DISC"
            description="💿 A tool to build Discord implicit social graphs"
            url="https://github.com/tomasff/disc"
        />

        <Project
            name="WW Verify"
            description="✅ A Discord bot that verifies affiliation with the University of Warwick"
            url="https://github.com/tomasff/wwv"
        />

        <Project
            name="Positivum"
            description="📰 A web application which categorizes news articles by sentiment"
            url="https://github.com/tomasff/positivum"
        />

        <Project
            name="FINPerceiver"
            description="📈 Fine-tuned Perceiver IO model for financial sentiment analysis"
            url="https://github.com/WarwickAI/fin-perceiver"
        />

        <Project
            name="BeesPlus"
            description="🐝 A Spigot (Minecraft server software) plugin that displays useful bee-related information"
            url="https://github.com/tomasff/BeesPlus"
        />
    </>
)

export default Projects