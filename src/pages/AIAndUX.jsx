import React from 'react';
import "../styles/AIAndUX.css";
import BackButton from '../components/BackButton';

export default function AIAndUX() {
    const jobs = [
        {
            id: 1,
            title: 'UX Designer - AI Products',
            company: 'TechCorp Denmark',
            location: 'Copenhagen',
            description: 'Design user experiences for AI-powered applications.',
            salary: '500-650k DKK'
        },
        {
            id: 2,
            title: 'AI/ML Product Designer',
            company: 'InnovateDK',
            location: 'Aarhus',
            description: 'Create intuitive interfaces for machine learning tools.',
            salary: '550-700k DKK'
        },
        {
            id: 3,
            title: 'Interaction Designer',
            company: 'DesignStudio Copenhagen',
            location: 'Copenhagen',
            description: 'Design interactions for AI-assisted user workflows.',
            salary: '480-600k DKK'
        }
    ];

    return (
        <div className="ai-ux-container">
            <BackButton fallback="/" />
            <header className="ai-ux-header">
                <h1>AI & UX Jobs in Denmark</h1>
                <p>Explore opportunities at the intersection of AI and User Experience</p>
            </header>

            <section className="jobs-grid">
                {jobs.map(job => (
                    <div key={job.id} className="job-card">
                        <h2>{job.title}</h2>
                        <p className="company">{job.company}</p>
                        <p className="location">📍 {job.location}</p>
                        <p className="description">{job.description}</p>
                        <p className="salary">💰 {job.salary}</p>
                        <button className="apply-btn">Learn More</button>
                    </div>
                ))}
            </section>
        </div>
    );
}