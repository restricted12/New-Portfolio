import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const statsData = [
  {
    icon: 'bi-emoji-smile',
    end: 2,
    title: 'Happy Clients',
    description: 'consequuntur quae'
  },
  {
    icon: 'bi-journal-richtext',
    end: 8,
    title: 'Projects',
    description: 'adipisci atque cum quia aut'
  },
  {
    icon: 'bi-headset',
    end: 1453,
    title: 'Hours Of Support',
    description: 'aut commodi quaerat'
  },
  {
    icon: 'bi-people',
    end: 1,
    title: 'Hard Workers',
    description: 'rerum asperiores dolor'
  }
];

const skillsData = [
  { name: 'HTML', value: 100 },
  { name: 'CSS', value: 90 },
  { name: 'Bootstrap', value: 90 },
  { name: 'JavaScript', value: 75 },
  { name: 'React.js', value: 80 },
  { name: 'MYSQL', value: 90 },
  { name: 'Express.js', value: 85 },
  { name: 'Node.js', value: 80 }
];

const StatsAndSkills = () => {
  return (
    <>
    <main className="main">
      <section id="stats" className="stats section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {statsData.map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="stats-item">
                  <i className={`bi ${item.icon}`}></i>
                  <span className="purecounter">{item.end}</span>
                  <p><strong>{item.title}</strong> <span>{item.description}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="skills section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            <div className="col-lg-6">
              {skillsData.slice(0, 4).map((skill, index) => (
                <div className="progress" key={index}>
                  <span className="skill"><span>{skill.name}</span> <i className="val">{skill.value}%</i></span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${skill.value}%` }}
                      aria-valuenow={skill.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              {skillsData.slice(3).map((skill, index) => (
                <div className="progress" key={index}>
                  <span className="skill"><span>{skill.name}</span> <i className="val">{skill.value}%</i></span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${skill.value}%` }}
                      aria-valuenow={skill.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  );
};

export default StatsAndSkills;
