"use client";

import React, { useState } from 'react';
import styles from './projectsList.module.css';

export default function ProjectList() {
  const projects = [ 
    { name: 'Project 1', type: ['web'] },
    { name: 'Project 2', type: ['branding'] },
    { name: 'Project 3', type: ['web', 'branding'] },
    { name: 'Project 4', type: ['branding'] },
  ];

  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.type.includes(filter));

  return (
    <main className={styles.main}>
      <div>
        <button onClick={() => setFilter('all')}>Show All</button>
        <button onClick={() => setFilter('web')}>Show Web</button>
        <button onClick={() => setFilter('branding')}>Show Branding</button>
      </div>
      {filteredProjects.map(project => (
        <h1 key={project.name}>{project.name}</h1>
      ))}
    </main>
  );
}
