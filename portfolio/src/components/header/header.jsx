import React from 'react';
// import './Header.css'; // Add this for your custom styles
import profileImg from '../../assets/img/main/my-profile-img.jpg';
import newhero from '../../assets/img/portfolio/image.png' 

const Header = () => {
    return (
      <>
        {/* Main Hero Section */}
        <body class="index-page">
        <main className="main">
          <section id="hero" className="hero section dark-background">
            <img src='https://wallpapers.com/images/featured/laptop-murjp1nk4lp1idlt.jpg' alt="Hero" data-aos="fade-in" />
  
            <div className="container" data-aos="fade-up" data-aos-delay="100">
              {/* <h2>Ezedin Abdela</h2> */}
              {/* <p>
                I'm{' '}
                <Typed
                  strings={['Designer', 'Developer', 'Freelancer', 'Photographer']}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </p> */}
            </div>
          </section>
        {/* </main> */}
        </main>
        {/* Header Section */}
        <header id="header" className="header dark-background d-flex flex-column">
          <i className="header-toggle d-xl-none bi bi-list"></i>
  
          <div className="profile-img">
            <img src={newhero} alt="Profile" className="img-fluid rounded-circle" />
          </div>
  
          <a href="index.html" className="logo d-flex align-items-center justify-content-center">
            <h1 className="sitename">Ezedin Abdela</h1>
          </a>
  
          <div className="social-links text-center">
            <a href="https://x.com/ezpayooner76136" className="twitter"><i className="bi bi-twitter-x"></i></a>
            <a href="https://github.com/restricted12/" className="github"><i className="bi bi-github"></i></a>
            <a href="https://www.instagram.com/ezedin_64/" className="instagram"><i className="bi bi-instagram"></i></a>
            {/* <a href="#" className="google-plus"><i className="bi bi-skype"></i></a> */}
            <a href="https://www.linkedin.com/in/ezedin-abdela-1a629b318/" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
  
          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#hero" className="active"><i className="bi bi-house navicon"></i> Home</a></li>
              <li><a href="#about"><i className="bi bi-person navicon"></i> About</a></li>
              <li><a href="#resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</a></li>
              <li><a href="#portfolio"><i className="bi bi-images navicon"></i> Portfolio</a></li>
              <li><a href="#services"><i className="bi bi-hdd-stack navicon"></i> Services</a></li>
              <li className="dropdown">
                {/* <a href="#"><i className="bi bi-menu-button navicon"></i> <span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a> */}
                <ul>
                  <li><a href="#">Dropdown 1</a></li>
                  <li className="dropdown">
                    <a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    {/* <ul>
                      <li><a href="#">Deep Dropdown 1</a></li>
                      <li><a href="#">Deep Dropdown 2</a></li>
                      <li><a href="#">Deep Dropdown 3</a></li>
                      <li><a href="#">Deep Dropdown 4</a></li>
                      <li><a href="#">Deep Dropdown 5</a></li>
                    </ul> */}
                  </li>
                  {/* <li><a href="#">Dropdown 2</a></li>
                  <li><a href="#">Dropdown 3</a></li>
                  <li><a href="#">Dropdown 4</a></li> */}
                </ul>
              </li>
              <li><a href="#contact"><i className="bi bi-envelope navicon"></i> Contact</a></li>
            </ul>
          </nav>
        </header>
        </body>
      </>
    );
  };
  
  
export default Header;
