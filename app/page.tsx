const HomePage = () => {
  const projects = ['Project Alpha', 'Project Beta', 'Project Gamma']

  return (
    <div style={styles.container}>
      <h1 style={styles.projectName}>QA Report Application</h1>
      <ul style={styles.projectList}>
        {projects.map((project, index) => (
          <li key={index} style={styles.projectItem}>
            <a href={`/projects/${project.toLowerCase().replace(' ', '-')}`}>
              {project}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '50px',
  },
  projectName: {
    fontSize: '2.5rem',
    margin: '20px 0',
  },
  projectList: {
    listStyle: 'none',
    padding: 0,
    margin: '20px 0',
    width: '100%',
    maxWidth: '400px',
  },
  projectItem: {
    padding: '10px 15px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.2s',
  },
  projectItemHover: {
    backgroundColor: '#f0f0f0',
  },
}

export default HomePage
