import React from "react";
import { motion } from "framer-motion";
import { AiOutlineEye } from "react-icons/ai"; // Icon for View
import { AiFillGithub } from "react-icons/ai"; // Icon for GitHub

const portfolioData = [
  { id: 1, title: "App 1", category: "app", image: "/assets/img/portfolio/app-1.jpg", github: "https://github.com/user/app1" },
  { id: 2, title: "Product 1", category: "product", image: "/assets/img/portfolio/product-1.jpg", github: "https://github.com/user/product1" },
  { id: 3, title: "Branding 1", category: "branding", image: "/assets/img/portfolio/branding-1.jpg", github: "https://github.com/user/branding1" },
  { id: 4, title: "Books 1", category: "books", image: "/assets/img/portfolio/books-1.jpg", github: "https://github.com/user/books1" },
  { id: 5, title: "App 2", category: "app", image: "/assets/img/portfolio/app-2.jpg", github: "https://github.com/user/app2" },
  { id: 6, title: "Product 2", category: "product", image: "/assets/img/portfolio/product-2.jpg", github: "https://github.com/user/product2" },
  { id: 7, title: "Branding 2", category: "branding", image: "/assets/img/portfolio/branding-2.jpg", github: "https://github.com/user/branding2" },
  { id: 8, title: "Books 2", category: "books", image: "/assets/img/portfolio/books-2.jpg", github: "https://github.com/user/books2" },
  { id: 9, title: "App 3", category: "app", image: "/assets/img/portfolio/app-3.jpg", github: "https://github.com/user/app3" },
  { id: 10, title: "Product 3", category: "product", image: "/assets/img/portfolio/product-3.jpg", github: "https://github.com/user/product3" },
  { id: 11, title: "Branding 3", category: "branding", image: "/assets/img/portfolio/branding-3.jpg", github: "https://github.com/user/branding3" },
  { id: 12, title: "Books 3", category: "books", image: "/assets/img/portfolio/books-3.jpg", github: "https://github.com/user/books3" },
];

const categories = ["all", "app", "product", "branding", "books"];

export default function PortfolioSection() {
  const [filter, setFilter] = React.useState("all");

  const filteredData =
    filter === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === filter);

  const handleTabChange = (value) => {
    setFilter(value);
  };

  return (
    <main className="main">
      <section className="py-5 bg-light" id="portfolio" style={{ minHeight: "100vh" }}>
        <div className="container px-4">
          <motion.div
            className="text-center mb-5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Portfolio</h2>
            <p className="lead text-muted mt-3" style={{ maxWidth: "800px", margin: "0 auto" }}>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </motion.div>

          <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleTabChange(category)}
                className={`btn ${filter === category ? "btn-primary" : "btn-outline-secondary"} px-4 py-2 rounded-pill`}
                style={{
                  transition: "all 0.3s ease",
                  boxShadow: filter === category ? "0 4px 8px rgba(13, 110, 253, 0.3)" : "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <div key={item.id} className="col">
                  <div className="card h-100 shadow-sm" style={{ border: "none", transition: "transform 0.3s ease" }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover", filter: "brightness(90%)", transition: "filter 0.3s ease" }}
                      onError={(e) => {
                        console.error(`Failed to load image: ${item.image}`);
                        e.target.src = "/assets/img/placeholder.jpg";
                      }}
                      onMouseOver={(e) => (e.target.style.filter = "brightness(110%)")}
                      onMouseOut={(e) => (e.target.style.filter = "brightness(90%)")}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fw-bold">{item.title}</h5>
                      <p className="card-text text-muted flex-grow-1">Lorem ipsum, dolor sit amet consectetur</p>
                      <div className="d-flex gap-2 mt-auto">
                        <a href="#" className="btn btn-primary" style={{ transition: "all 0.3s ease", padding: "0.25rem 0.5rem", width: "40px" }}>
                          <AiOutlineEye size={16} />
                        </a>
                        <a href={item.github} target="_blank" rel="noopener noreferrer" className="btn btn-dark" style={{ transition: "all 0.3s ease", padding: "0.25rem 0.5rem", width: "40px" }}>
                          <AiFillGithub size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted col-12">No items found for this category.</p>
            )}
          </div>
        </div>
        <style>
          {`
            .card:hover {
              transform: translateY(-5px);
              box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
            }
            .btn:hover {
              transform: scale(1.05);
            }
            @media (max-width: 768px) {
              .row {
                row-cols-1 !important;
              }
            }
          `}
        </style>
      </section>
    </main>
  );
}