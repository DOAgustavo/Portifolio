import './estiloSkills.css';
import { FaJs, FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import { SiNextdotjs, SiFlutter, SiDart, SiMysql } from 'react-icons/si';

export default function Skills() {
    const skills = [
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        
        { name: 'Flutter', icon: <SiFlutter /> },
        { name: 'Dart', icon: <SiDart /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'CSS', icon: <FaCss3Alt /> },
        { name: 'HTML', icon: <FaHtml5 /> },
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