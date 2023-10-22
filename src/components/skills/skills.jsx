import React from 'react';
import './skills.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const SkillCard = ({ skill, level }) => (
  <div className="skills__card">
    <BsPatchCheckFill className="skills__icon" />
    <h4 className="skills__skill">{skill}</h4>
    <small className="skills__level">{level}</small>
  </div>
);

const Skills = () => {
  const skillsData = [
    {
      category: 'Frontend Development', skills: [
        { skill: 'React', level: 'Intermediate' },
        { skill: 'HTML', level: 'Experienced' },
        { skill: 'CSS', level: 'Intermediate' },
        { skill: 'JavaScript', level: 'Experienced' },
        { skill: 'Bootstrap', level: 'Experienced' },
        { skill: 'Tailwind', level: 'Experienced' },
      ]
    },
    {
      category: 'Backend Development', skills: [
        { skill: 'Node JS', level: 'Basic       ' },
        { skill: 'MongoDB', level: 'Intermediate' },
        { skill: 'Python', level: 'Intermediate' },
        { skill: 'MySQL', level: 'Intermediate' },
      ]
    },
    {
      category: 'UI/UX Design', skills: [
        { skill: 'UI design', level: 'Intermediate' },
        { skill: 'UX Design', level: 'Basic       ' },
        { skill: 'Figma', level: 'Intermediate' },
        { skill: 'Wireframing', level: 'Intermediate' },
      ]
    },
    {
      category: 'Competency', skills: [
        { skill: 'Full Stack Development', level: 'Intermediate' },
        { skill: 'Cloud Computing', level: 'Basic' },
        { skill: 'Machine Learning', level: 'Basic' },
        { skill: 'Business Intelligence', level: 'Intermediate' },
        { skill: 'Graphic Designing', level: 'Intermediate' },
      ]
    },
  ];

  return (
    <section id="skills" className="skills">
      <h5>Explore My Skillset</h5>
      <h2>My Proficiencies</h2>

      <div className="container skills__container">
        {skillsData.map((category, index) => (
          <div className="skills__category" key={index}>
            <h3 className="skills__category-title">{category.category}</h3>
            <div className="skills__content">
              {category.skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  skill={skill.skill}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
