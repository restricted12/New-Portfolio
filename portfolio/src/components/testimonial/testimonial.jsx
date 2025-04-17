import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "bootstrap-icons/font/bootstrap-icons.css";
import { 
  FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, 
  FaGithub, FaDatabase 
} from "react-icons/fa"; // Icons for tech stacks
import { SiJquery, SiMongodb, SiMysql, SiExpress } from "react-icons/si"; // Additional icons
// import { DiVsCode } from "react-icons/di"; // VS Code icon

const testimonials = [
  {
    icon: <FaHtml5 size={40} color="#E34F26" />,
    name: "HTML5",
    description: "Structured web content with semantic markup, enabling responsive and accessible websites.",
    // image: "assets/img/testimonials/testimonials-1.jpg",
    title: "Core Web Technology",
  },
  {
    icon: <FaCss3Alt size={40} color="#1572B6" />,
    name: "CSS3",
    description: "Styled web pages with advanced layouts, animations, and responsive design techniques.",
    // image: "assets/img/testimonials/testimonials-2.jpg",
    title: "Styling & Design",
  },
  {
    icon: <FaBootstrap size={40} color="#7952B3" />,
    name: "Bootstrap",
    description: "Built responsive, mobile-first websites with a powerful CSS framework.",
    // image: "assets/img/testimonials/testimonials-3.jpg",
    title: "Frontend Framework",
  },
  {
    icon: <FaJsSquare size={40} color="#F7DF1E" />,
    name: "JavaScript",
    description: "Added interactivity and dynamic features to websites with vanilla JavaScript.",
    // image: "assets/img/testimonials/testimonials-4.jpg",
    title: "Dynamic Scripting",
  },
  {
    icon: <SiJquery size={40} color="#0769AD" />,
    name: "jQuery",
    description: "Simplified DOM manipulation and event handling for faster development.",
    // image: "assets/img/testimonials/testimonials-5.jpg",
    title: "JavaScript Library",
  },
  {
    icon: <FaReact size={40} color="#61DAFB" />,
    name: "React.js",
    description: "Developed reusable UI components and managed state for single-page applications.",
    // image: "assets/img/testimonials/testimonials-6.jpg",
    title: "Frontend Library",
  },
  {
    icon: <SiMongodb size={40} color="#47A248" />,
    name: "MongoDB",
    description: "Managed NoSQL databases for scalable and flexible data storage.",
    // image: "assets/img/testimonials/testimonials-7.jpg",
    title: "Database",
  },
  {
    icon: <SiMysql size={40} color="#4479A1" />,
    name: "MySQL",
    description: "Utilized relational databases for structured data management and querying.",
    // image: "assets/img/testimonials/testimonials-8.jpg",
    title: "Database",
  },
  {
    icon: <SiExpress size={40} color="#000000" />,
    name: "Express.js",
    description: "Built RESTful APIs and server-side applications with a lightweight Node.js framework.",
    // image: "assets/img/testimonials/testimonials-9.jpg",
    title: "Backend Framework",
  },
  {
    icon: <FaNodeJs size={40} color="#339933" />,
    name: "Node.js",
    description: "Created scalable backend applications using JavaScript runtime.",
    // image: "assets/img/testimonials/testimonials-10.jpg",
    title: "Backend Runtime",
  },
  {
    icon: <FaGitAlt size={40} color="#F05032" />,
    name: "Git",
    description: "Managed version control and collaborated on projects with distributed teams.",
    // image: "assets/img/testimonials/testimonials-11.jpg",
    title: "Version Control",
  },
  {
    icon: <FaGithub size={40} color="#181717" />,
    name: "GitHub",
    description: "Hosted repositories, collaborated on code, and managed project workflows.",
    // image: "assets/img/testimonials/testimonials-12.jpg",
    title: "Code Hosting",
  },
  {
    // icon: <DiVsCode size={40} color="#007ACC" />,
    name: "VS Code",
    description: "Leveraged a powerful IDE for coding, debugging, and version control integration.",
    // image: "assets/img/testimonials/testimonials-13.jpg",
    title: "Development Tool",
  },
];

const TestimonialsSection = () => {
  return (
    <main className="main">
      <section id="testimonials" className="testimonials section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Tech Stacks</h2>
          <p>
            Tools and technologies I use to build modern, scalable, and responsive applications.
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            speed={600}
            autoplay={{ delay: 5000 }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 1,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-item text-center">
                  <div className="d-flex justify-content-center mb-3">
                    {testimonial.icon}
                  </div>
                  <h3>{testimonial.name}</h3>
                  <h4 className="text-muted mb-3">{testimonial.title}</h4>
                  <p className="px-3">
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{testimonial.description}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  {/* <img
                    src={testimonial.image}
                    className="testimonial-img"
                    alt={testimonial.name}
                    style={{ width: "100px", height: "100px", borderRadius: "50%", marginTop: "1rem" }}
                  /> */}
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </section>
    </main>
  );
};

export default TestimonialsSection;