const Projects = () => {
    const hobby_projects = [
      {
        name: "Shopping-list-backend",
        description: "Perinteinen ostoslista sovelluksen backend. Idea lähti kun oli tarve saada minulle kauppalista reaaliajassa",
        technologies: ["Go", "MySql"],
        link: "https://github.com/Jrvi/shopping-list-backend"
      },
      {
        name: "Shopping-list-app",
        description: "Perinteisen shopping list sovelluksen puhelin app tämä on vielä kesken eräinen ja on vasta aluillaan",
        technologies: ["React-Native"],
        link: "https://github.com/Jrvi/shopping-list-app"
      },
      {
        name: "Portfolio-sivusto",
        description: "Henkilökohtainen portfoliosivusto, jossa esittelen taitojani, kokemuksiani ja projektejani.",
        technologies: ["React", "CSS"],
        link: "https://github.com/Jrvi/portfolio"
      },
      {
        name: "Kalenteri-app",
        description: "Kalenteri sovellus, joka näyttää käyttäjien väliset vapaat ajat, jos he ovat yhdessä kavereita",
        technologies: ["Flutter", "Firebase"],
        link: "https://github.com/Jrvi/kalenteri"
      }
    ]

    const work_projects = [
        {
            name: "Työprojektit",
            description: "Olen toinut projektissa ja jatkuvan kehityksen projekteissa. Näistä voi kysyä enemmän. Linkkiä githubiin ei ole",
            technologies: ["React", "Angular", "Javascript", "Java", "HCL Commerce", "Liferay", "MySQL", "Postgres", "AWS", "Docker"]
        }
    ]

    console.log(work_projects);

    return (
      <div className="projects-container">
        <h2 className="projects-title">Harraste projektit</h2>
        {hobby_projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies"><strong>Teknologiat:</strong> {project.technologies.join(', ')}</p>
            <p><a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">Lähdekoodi</a></p>
          </div>
        ))}
        <h2 className="projects-title">Työ projekteista</h2>
        {work_projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-technologies"><strong>Teknologiat:</strong> {project.technologies.join(', ')}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default Projects;