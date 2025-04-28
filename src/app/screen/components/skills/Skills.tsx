import './estiloSkills.css';

export default function Skills() {
    const skills = [
      { name: 'JavaScript', icon: '🟨' },
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '⬛' },
      { name: 'Node.js', icon: '🟩' },
      { name: 'Flutter', icon: '💙' },
      { name: 'Dart', icon: '🎯' },
      { name: 'MySQL', icon: '🐬' },
      { name: 'CSS', icon: '🎨' },
      { name: 'HTML', icon: '📄' },
    ];

    return (
        <section id="skills">
            <h2 className="skills-title">Habilidades</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        <div className="skill-icon">{skill.icon}</div>
                        <div className="skill-name">{skill.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}