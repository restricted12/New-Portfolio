import React from "react";
import { 
  FaCode, FaShoppingCart, FaPlug, FaDatabase, FaCloudUploadAlt, FaLayerGroup 
} from "react-icons/fa"; // Icons for services

const services = [
  {
    icon: <FaCode size={40} color="#007bff" />,
    title: "Custom Web Development",
    description:
      "Craft tailored websites with modern technologies, ensuring seamless functionality and user experience.",
    delay: 100,
  },
  {
    icon: <FaShoppingCart size={40} color="#28a745" />,
    title: "E-commerce Development",
    description:
      "Build robust online stores with secure payment gateways, product management, and responsive design.",
    delay: 200,
  },
  {
    icon: <FaPlug size={40} color="#dc3545" />,
    title: "API Development & Integration",
    description:
      "Create and integrate RESTful APIs to connect applications and enable seamless data exchange.",
    delay: 300,
  },
  {
    icon: <FaDatabase size={40} color="#17a2b8" />,
    title: "Database Design & Management",
    description:
      "Design and manage efficient databases to store, retrieve, and secure your application data.",
    delay: 400,
  },
  {
    icon: <FaCloudUploadAlt size={40} color="#6610f2" />,
    title: "Web App Deployment & Hosting",
    description:
      "Deploy and host web applications on reliable platforms with optimized performance and scalability.",
    delay: 500,
  },
  {
    icon: <FaLayerGroup size={40} color="#fd7e14" />,
    title: "Full Stack Web Development",
    description:
      "Develop end-to-end web solutions, from frontend interfaces to backend logic and databases.",
    delay: 600,
  },
];

const ServicesSection = () => {
  return (
    <main className="main">
      <section id="services" className="services section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>
            Comprehensive solutions to build, deploy, and manage modern web applications tailored to your needs.
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 service-item d-flex"
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                <div className="icon flex-shrink-0">{service.icon}</div>
                <div>
                  <h4 className="title">
                    <a href="service-details.html" className="stretched-link">
                      {service.title}
                    </a>
                  </h4>
                  <p className="description">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesSection;