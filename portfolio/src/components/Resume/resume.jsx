import React from 'react';

const Resume = () => {
  return (
    <main className="main">
      <section id="resume" className="resume section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Resume</h2>
          <p>
          Aspiring full-stack developer with hands-on experience in frontend and backend
    technologies including HTML, CSS, JavaScript, React, Node.js, Express, MySQL, and
    Python. Known for building real-world projects like a food ordering app, movie database bot, 
    Netflix clone, Amazon clone, Garage Management System, and the Evangadi Forum platform. 
    Enthusiastic about solving problems and collaborating on tech solutions.
    Currently a student in the Evangadi Fullstack Web App Development program, sharpening practical
    skills through structured, industry-relevant training.
          </p>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Ezedin Abdela</h4>
                <p>
                  <em>
                    Aspiring full-stack developer with hands-on experience in frontend and backend
                    technologies including HTML, CSS, JavaScript, React, Node.js, Express, MySQL, and
                    Python. Known for building real-world projects like a food ordering app, movie database bot, 
                    and web scraping tools. Enthusiastic about solving problems and collaborating on tech solutions.
                  </em>
                </p>
                <ul>
                  <li>Addis Abeba, Ethiopia</li>
                  <li>+251964484087</li>
                  <li>ezepayooner@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Bachelor of Science in Computer Science</h4>
                <h5>2022 - 2027 (Expected)</h5>
                <p><em>Wollo University, Kombolcha, Ethiopia</em></p>
                <p>
                  Currently pursuing a degree in Computer Science, actively learning software engineering
                  principles, data structures, algorithms, and building tech solutions for real-world problems.
                </p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Projects & Experience</h3>

              <div className="resume-item">
                <h4>Fullstack Food Ordering Website</h4>
                <h5>2025</h5>
                <p><em>Personal Project</em></p>
                <ul>
                  <li>Built a complete food ordering app with user authentication and order management</li>
                  <li>Used React for frontend, Node.js/Express for backend, and MySQL for database</li>
                  <li>Handled both admin and customer views with CRUD functionality</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Web Scraping & Data Visualization</h4>
                <h5>2024</h5>
                <p><em>Personal Projects</em></p>
                <ul>
                  <li>Used BeautifulSoup and Selenium to scrape eBay and other platforms</li>
                  <li>Visualized scraped data with Matplotlib and Seaborn in Python</li>
                  <li>Analyzed trends and pricing patterns</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Tech Skills & Interests</h4>
                <ul>
                  <li>Languages: Python, JavaScript, SQL</li>
                  <li>Frameworks: React, Node.js, Express</li>
                  <li>Tools: MySQL, Git, VS Code, Postman, BeautifulSoup, Matplotlib</li>
                  <li>Other:Backend APIs, Responsive Design, Web Security Basics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Resume;
