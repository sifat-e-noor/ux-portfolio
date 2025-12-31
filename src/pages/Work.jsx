import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles/work.css';
import BackButton from '../components/BackButton';

export default function Work() {
  const { id } = useParams(); 

  const projects = [
    {
      id: 1,
      title: 'Projekt 1',
      description: 'Kort beskrivelse af dit UX-projekt',
      image: '/images/project1.jpg',
      tags: ['UX Design', 'Research'],
      link: '/work/project-1',
    },
    {
      id: 2,
      title: 'Projekt 2',
      description: 'Kort beskrivelse af dit UX-projekt',
      image: '/images/project2.jpg',
      tags: ['Prototype', 'Testing'],
      link: '/work/project-2',
    },
  ];

  return (
    <div className="work-page">
      <BackButton fallback="/" />
      <section className="work-hero">
        <h1>Mine Arbejder</h1>
        <p>Udvalgte UX/UI projekter og case studies</p>
      </section>

      <section className="work-grid">
        {projects.map((project) => (
          <article key={project.id} className="work-card">
            <img src={project.image} alt={project.title} />
            <div className="work-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to={project.link} className="btn-primary">
                Se projekt
              </Link>
            </div>
          </article>
        ))}
            <div>
                <h1>Work</h1>
                    <p>Route id: {id}</p>
            </div>
      </section>
    </div>
  );
}
