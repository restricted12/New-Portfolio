import React from 'react';
// import 'aos/dist/aos.css'; // if you're using AOS
// import AOS from 'aos';
import { useEffect } from 'react';
import myprofile from '../../../assets/img/main/my-profile-img.jpg'



const About = () => {
  useEffect(() => {
    // AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="main">
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
          Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
          alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img
              src='../../../assets/img/portfolio/image.png'
              className="img-fluid"
              alt="My Profile"
            />
          </div>
          <div className="col-lg-8 content">
            <h2>MERN stack Developer &amp; Web Developer.</h2>
            <p className="fst-italic py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Birthday:</strong> <span>25 May 2004</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Website:</strong> <span>www.ezedin75.netlify.app</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Phone:</strong> <span>+251 964 48 4087</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>City:</strong> <span>AddisAbeba, Ethiopia</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Age:</strong> <span>20</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Degree:</strong> <span>Bachelor</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Email:</strong> <span>ezepayooner@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>{' '}
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt
              adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
              Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus
              itaque neque.
            </p>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default About;
