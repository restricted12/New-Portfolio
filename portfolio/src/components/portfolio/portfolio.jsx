import React from "react";
import { motion } from "framer-motion";
import { AiOutlineEye } from "react-icons/ai"; // View icon
import { AiFillGithub } from "react-icons/ai"; // GitHub icon

const portfolioData = [
  { id: 1, title: "Apple Website", category: "Apple Web", image: "https://www.versionmuseum.com/images/websites/apple-website/apple-website%5E2018%5Ehomepage.jpg", github: "https://github.com/restricted12/vite-project", link: "https://apple-clone-home-pages.netlify.app/", description: "A clone of Apple's homepage with a sleek, modern design." },
  { id: 2, title: "NETFLIX Home", category: "NETFLIX", image: "https://www.slidekit.com/wp-content/uploads/2023/11/Presentation-Netflix-PowerPoint-Template.jpg", github: "https://github.com/restricted12/Netflix-clone-2024-c", link: "https://nahom-tadesse-netfli-x-react-clone.netlify.app/", description: "A Netflix homepage clone with responsive layout and movie previews." },
  // { id: 3, title: "Branding 1", category: "branding", image: "/assets/img/portfolio/branding-1.jpg", github: "https://github.com/user/branding1", link: "https://live-site.com/branding1", description: "A branding project showcasing visual identity design." },
  { id: 4, title: "Cafe Home Page", category: "Cafe-Ordering-System", image: "https://www.restapp.com/wp-content/uploads/2021/12/restaurant_online_ordering.png", github: "https://github.com/restricted12/cafe-pro2", link: "https://ourscafe.netlify.app/", description: "A cafe homepage for online ordering and menu browsing." },
  { id: 5, title: "Apple Store", category: "Apple Web", image: "https://images.macrumors.com/t/R4dLBtZ9tBuHJSFpMGNo4oriQnE=/1600x900/smart/article-new/2020/02/apple-homepage-apple-arcade.jpg", github: "https://github.com/restricted12/vite-project", link: "https://apple-clone-home-pages.netlify.app/", description: "An Apple Store page featuring product listings." },
  { id: 6, title: "NETFLIX Movies", category: "NETFLIX", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5QL9EwY7kA1tc5TZqbc_wSdpMaIvYtirFpQ&s", github: "https://github.com/restricted12/Netflix-clone-2024-c", link: "https://nahom-tadesse-netfli-x-react-clone.netlify.app/", description: "A Netflix movies page with dynamic content loading." },
  // { id: 7, title: "Branding 2", category: "branding", image: "/assets/img/portfolio/branding-2.jpg", github: "https://github.com/user/branding2", link: "https://live-site.com/branding2", description: "A branding project focused on logo and color scheme design." },
  { id: 8, title: "Cafe Admin Page", category: "Cafe-Ordering-System", image: "https://code-projects.org/wp-content/uploads/2018/12/Screenshot-simpleCafeOrderingSysytem.png", github: "https://github.com/restricted12/cafe-pro2", link: "https://ourscafe.netlify.app/", description: "An admin dashboard for managing cafe orders." },
  { id: 9, title: "Apple Products", category: "Apple Web", image: "https://www.buyandship.ph/contents/uploads/2021/10/Apple-Blog.png", github: "https://github.com/restricted12/vite-project", link: "https://apple-clone-home-pages.netlify.app/", description: "A page showcasing Apple's latest products." },
  { id: 10, title: "NETFLIX Categories", category: "NETFLIX", image: "https://slidechef.net/wp-content/uploads/2021/12/The-Withcer-Template.jpg", github: "https://github.com/restricted12/Netflix-clone-2024-c", link: "https://nahom-tadesse-netfli-x-react-clone.netlify.app/", description: "A Netflix categories page with genre-based browsing." },
  { id: 11, title: "Cafe Cart Page", category: "Cafe-Ordering-System", image: "https://www.upmenu.com/wp-content/uploads/2024/06/1-contactless-ordering-for-restaurant-upmenu-step2.jpg", github: "https://github.com/restricted12/cafe-pro2", link: "https://ourscafe.netlify.app/", description: "A cart page for cafe orders with checkout functionality." },
  // { id: 12, title: "Books 3", category: "books", image: "/assets/img/portfolio/books-3.jpg", github: "https://github.com/user/books3", link: "https://live-site.com/books3", description: "A book showcase page with a clean, minimal design." },
  { id: 13, title: "Garage Dashboard", category: "Garage Management System", image: "https://iili.io/31VMd37.png", github: "https://github.com/restricted12/AbeGarageNew", link: "", description: "A dashboard for managing garage operations." },
  { id: 14, title: "Customer Profile", category: "Garage Management System", image: "https://iili.io/31VVlDb.png", github: "https://github.com/restricted12/AbeGarageNew", link: "", description: "A booking system for garage services." },
  { id: 15, title: "Customer Orders", category: "Garage Management System", image: "https://iili.io/31VWLYP.png", github: "https://github.com/restricted12/AbeGarageNew", link: "", description: "An inventory tracker for garage parts and tools." },
  { id: 16, title: "Evangadi Forum Home", category: "Evangadi-Forum", image: "https://iili.io/31VYWla.jpg", github: "https://github.com/restricted12/EvangadiForumClone", link: "https://live-site.com/evangadi1", description: "A forum homepage for Evangadi community discussions." },
  { id: 17, title: "Evangadi Q&A", category: "Evangadi-Forum", image: "https://iili.io/31V1Tan.jpg", github: "https://github.com/restricted12/EvangadiForumClone", link: "https://live-site.com/evangadi2", description: "A Q&A section for Evangadi forum users." },
  { id: 18, title: "Evangadi SignUp/Login", category: "Evangadi-Forum", image: "https://iili.io/31Vlg0F.jpg", github: "https://github.com/restricted12/EvangadiForumClone", link: "https://live-site.com/evangadi3", description: "A user profile page for the Evangadi forum." },
  { id: 19, title: "Amazon Clone Home", category: "Amazone-clone", image: "https://internetretailing.net/wp-content/uploads/2022/05/amazon-homepage-screenshot.png", github: "https://github.com/restricted12/amazone-clone-website", link: "https://amazone-clone-website.vercel.app/", description: "A homepage clone of Amazon with product listings." },
  { id: 20, title: "Amazon Clone Cart", category: "Amazone-clone", image: "https://i2.wp.com/accorin.com/wp-content/uploads/2015/10/amazon-checkout.png", github: "https://github.com/restricted12/amazone-clone-website", link: "https://amazone-clone-website.vercel.app/", description: "A cart page for an Amazon clone with checkout features." },
  { id: 21, title: "Amazon Clone Products", category: "Amazone-clone", image: "https://mrkp-static-production.themarkup.org/uploads/2021/11/amazon_fleece_fallback-720x451.jpg", github: "https://github.com/restricted12/amazone-clone-website", link: "https://amazone-clone-website.vercel.app/", description: "A product listing page for an Amazon clone." },
];

const categories = ["all", "Apple Web", "NETFLIX", "Cafe-Ordering-System", "Garage Management System", "Evangadi-Forum", "Amazone-clone"];

export default function PortfolioSection() {
  const [filter, setFilter] = React.useState("all");

  // Function to get one item per category
  const getOneItemPerCategory = () => {
    const uniqueCategories = [...new Set(portfolioData.map(item => item.category))]; // Get unique categories
    return uniqueCategories.map(category => {
      const itemsInCategory = portfolioData.filter(item => item.category === category);
      return itemsInCategory[0]; // Return the first item from each category
    }).filter(item => item !== undefined); // Filter out undefined items
  };

  const filteredData =
    filter === "all"
      ? getOneItemPerCategory()
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
              A showcase of my projects, including clones, web apps, and management systems built with modern technologies.
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
                      <p className="card-text text-muted flex-grow-1">{item.description}</p>
                      <div className="d-flex gap-2 mt-auto">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-success"
                          style={{ transition: "all 0.3s ease", padding: "0.25rem 0.5rem", width: "40px" }}
                        >
                          <AiOutlineEye size={16} />
                        </a>
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-dark"
                          style={{ transition: "all 0.3s ease", padding: "0.25rem 0.5rem", width: "40px" }}
                        >
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