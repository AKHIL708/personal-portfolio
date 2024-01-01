import React, { useState, useEffect } from "react";
import bitmojiImage from "../../Assets/images/bitmoji.png";
import personalImage from "../../Assets/images/background-removed-img.jpg";
import Resume from "../../Assets/resumePdf/resume.pdf";
import ecommerce from "../../Assets/images/ecommerce.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import VerifiedIcon from "@mui/icons-material/Verified";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DehazeIcon from "@mui/icons-material/Dehaze";
import capnxtLogo from "../../Assets/images/logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";
// import personalImage from "../../Assets/images/IMG-20240101-WA0001.jpg";
// import personalImage from "../../Assets/images/IMG-20240101-WA0005.jpg";
import "./Home.scss";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [bgColour, setBgColour] = useState("black");
  const [fontColour, setFontColour] = useState("#FAFAFA");
  const [isNightMode, setIsNightMode] = useState(true);
  const [showMobileLinks, setShowMobileLinks] = useState(false);

  const handleColourMode = () => {
    if (isNightMode) {
      setBgColour("#FAFAFA");
      setFontColour("black");
      setIsNightMode(false);
    } else {
      setBgColour("black");
      setFontColour("#FAFAFA");
      setIsNightMode(true);
    }
  };

  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth <= 768) {
      setIsMobileView(true);
    }
  }, []);

  return (
    <>
      <section
        id="Home"
        style={{ color: fontColour, backgroundColor: bgColour }}
      >
        <header
          className="nav-bar"
          style={{ color: fontColour, backgroundColor: bgColour }}
        >
          <div
            className="logo"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth", // Add smooth scrolling behavior
              });
            }}
          >
            <h1>AKHIL</h1>
          </div>
          <nav className="links">
            {!isMobileView ? (
              <>
                <p
                  onClick={() => {
                    window.scrollTo({
                      top: 600,
                      behavior: "smooth", // Add smooth scrolling behavior
                    });
                  }}
                >
                  About
                </p>
                <p
                  onClick={() => {
                    window.scrollTo({
                      top: 1300,
                      behavior: "smooth", // Add smooth scrolling behavior
                    });
                  }}
                >
                  Skills
                </p>
                <p
                  onClick={() => {
                    window.scrollTo({
                      top: 2450,
                      behavior: "smooth", // Add smooth scrolling behavior
                    });
                  }}
                >
                  Experience
                </p>
                <p
                  onClick={() => {
                    window.scrollTo({
                      top: 3100,
                      behavior: "smooth", // Add smooth scrolling behavior
                    });
                  }}
                >
                  Projects
                </p>
                <p
                  onClick={() => {
                    window.scrollTo({
                      top: 4000,
                      behavior: "smooth", // Add smooth scrolling behavior
                    });
                  }}
                >
                  Contact
                </p>

                <div
                  className="mode-changer"
                  onClick={() => handleColourMode()}
                >
                  {isNightMode ? (
                    <LightModeIcon className="icon" />
                  ) : (
                    <NightlightIcon className="icon" />
                  )}
                </div>
              </>
            ) : (
              <>
                <>
                  <div className="mobile-components">
                    <div
                      className="mode-changer"
                      onClick={() => handleColourMode()}
                    >
                      {isNightMode ? (
                        <LightModeIcon className="icon" />
                      ) : (
                        <NightlightIcon className="icon" />
                      )}
                    </div>
                    <DehazeIcon
                      className="three-line"
                      onClick={() => {
                        if (!showMobileLinks) {
                          setShowMobileLinks(true);
                        } else {
                          setShowMobileLinks(false);
                        }
                      }}
                    />
                    {showMobileLinks && (
                      <>
                        {" "}
                        <div
                          className="mobile-nav-links"
                          style={{
                            backgroundColor: bgColour,
                            color: fontColour,
                            border : `1px solid ${fontColour}`
                          }}
                        >
                          <h1
                            onClick={() => {
                              window.scrollTo({
                                top: 600,
                                behavior: "smooth",
                              });
                              setShowMobileLinks(false);
                            }}
                          >
                            About
                          </h1>
                          <h1
                            onClick={() => {
                              window.scrollTo({
                                top: 1350,
                                behavior: "smooth",
                              });
                              setShowMobileLinks(false);
                            }}
                          >
                            Skills
                          </h1>
                          <h1
                            onClick={() => {
                              window.scrollTo({
                                top: 2350,
                                behavior: "smooth",
                              });
                              setShowMobileLinks(false);
                            }}
                          >
                            Experience
                          </h1>
                          <h1
                            onClick={() => {
                              window.scrollTo({
                                top: 3000,
                                behavior: "smooth",
                              });
                              setShowMobileLinks(false);
                            }}
                          >
                            Projects
                          </h1>
                          <h1
                            onClick={() => {
                              window.scrollTo({
                                top: 4000,
                                behavior: "smooth",
                              });
                              setShowMobileLinks(false);
                            }}
                          >
                            Contact
                          </h1>
                        </div>
                      </>
                    )}
                  </div>
                </>
              </>
            )}
          </nav>
        </header>
        <div className="profile-section">
          <div
            className="col"
            data-aos="fade-right"
            data-aos-duration="950"
            data-aos-delay="200"
          >
            <div className="row">
              <p>Hello, i'm</p>
              <h1>Akhil Nayak</h1>
              <p>Full Stack Developer</p>
            </div>
            <div className="row">
              <button>
                {" "}
                <a href={`${Resume}`} target="_blank">
                  resume
                </a>{" "}
                <DownloadIcon className="icon" />{" "}
              </button>
              <button>Contact Info</button>
            </div>
            <div
              className="row"
              data-aos="fade-up"
              data-aos-duration="950"
              data-aos-delay="300"
            >
              <a
                target="_blank"
                href="https://www.linkedin.com/in/akhil-nayak-3913b31b6/"
              >
                <LinkedInIcon className="icon" />
              </a>
              <a target="_blank" href="https://github.com/AKHIL708">
                <GitHubIcon className="icon" />
              </a>
            </div>
          </div>
          <div
            className="col"
            data-aos="fade-left"
            data-aos-duration="950"
            data-aos-delay="200"
          >
            <div
              className="store-profile-img"
              style={{ backgroundImage: `url(${personalImage})` }}
            ></div>
          </div>
        </div>
        <div className="get-to-know-more">
          <header>
            <p>Get to Know</p>
            <h1>About Me</h1>
          </header>
          <div className="about-me">
            <div
              className="col"
              data-aos="fade-right"
              data-aos-duration="950"
              data-aos-delay="200"
            >
              <div
                className="store-img"
                style={{ backgroundImage: `url(${bitmojiImage})` }}
              ></div>
            </div>
            <div className="col">
              <div className="row">
                <div
                  className="card"
                  data-aos="flip-left"
                  data-aos-duration="950"
                >
                  <VerifiedIcon className="icon" />
                  <h1>Experience</h1>
                  <p>2+ years FSD</p>
                </div>
                <div
                  className="card"
                  data-aos="flip-right"
                  data-aos-delay="200"
                >
                  <PeopleAltIcon className="icon" />
                  <h1>Education</h1>
                  <p>B.com computers Bachelors Degree</p>
                </div>
              </div>
              <div className="row" data-aos="fade-up" data-aos-duration="950">
                <p className="card">
                  As a self-taught full-stack developer with over 2 years of
                  experience, I specialize in creating impactful e-commerce
                  solutions, intricate dashboards, and tailored websites,
                  including projects for educational institutions. My expertise
                  lies in crafting dynamic and visually engaging web
                  experiences, often incorporating animations to elevate user
                  interaction. Possessing a versatile skill set in both frontend
                  and backend technologies, I am committed to continuous
                  learning and adaptability, ensuring the delivery of
                  cutting-edge solutions that align with industry trends.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="explore-experience">
          <header>
            <p>Explore My</p>
            <h1>Technical Skills</h1>
          </header>
          <div className="cards">
            <div
              className="card"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <header>
                <h1>Frontend</h1>
              </header>
              <div className="col">
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>HTML</h1>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>CSS / SASS</h1>
                    <p>Experienced</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>Java Script</h1>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>React js</h1>
                    <p>Experienced</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>Anime js</h1>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>Figma</h1>
                    <p>Intermediate</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <header>
                <h1>Backend</h1>
              </header>
              <div className="col">
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>Node js</h1>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>Express js</h1>
                    <p>Experienced</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>My Sql</h1>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>Mongo DB</h1>
                    <p>Experienced</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>JWT</h1>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>REST API's</h1>
                    <p>Intermediate</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card"
              data-aos="zoom-in"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <header>
                <h1>Additional</h1>
              </header>
              <div className="col">
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>AWS</h1>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>Fire Base</h1>
                    <p>Experienced</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>GitHub</h1>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>CI/CD pineline</h1>
                    <p>Experienced</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>JAVA</h1>
                    <p>Intermediate</p>
                  </div>
                </div>
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>DSA</h1>
                    <p>searching , sorting (medium)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Experience">
          <header>
            <p>On Feild</p>
            <h1>Experience</h1>
          </header>
          <div className="col">
            <div
              className="store-img"
              style={{ backgroundImage: `url(${capnxtLogo})` }}
            ></div>
            <div
              className="row"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <h1>
                CapNxt Technologies <span>1+ year (intern)</span>
              </h1>
              <p>
                During my one-year internship at CapNXT Technologies, I played a
                pivotal role in the development of diverse digital solutions. I
                actively contributed to the creation of responsive websites,
                demonstrating proficiency in crafting interfaces that adapt
                seamlessly across various devices. Additionally, my involvement
                extended to designing and implementing dashboards, enhancing
                user experiences through interactive and visually appealing data
                representations.
              </p>
            </div>
          </div>
        </div>

        <div className="projects">
          <header>
            <p>My Recent</p>
            <h1>Projects</h1>
          </header>
          <div
            className="cards"
            data-aos="fade-right"
            data-aos-duration="950"
            data-aos-delay="300"
          >
            <div className="card">
              <div className="project-info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat nisi officiis ipsa eligendi magnam, tempora quisquam
                  omnis nihil dolorem. Assumenda nam accusamus veritatis
                  architecto eligendi.
                </p>
              </div>
              <div
                className="store-img"
                style={{ backgroundImage: `url(${ecommerce})` }}
              ></div>
              <h1>E-commerce Application</h1>
              <a
                href="https://github.com/AKHIL708/eCommereApplication"
                target="_blank"
              >
                {" "}
                <button>
                  Github <GitHubIcon className="icon" />
                </button>
              </a>
            </div>
            <div className="card">
              <div className="project-info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat nisi officiis ipsa eligendi magnam, tempora quisquam
                  omnis nihil dolorem. Assumenda nam accusamus veritatis
                  architecto eligendi.
                </p>
              </div>
              <div
                className="store-img"
                style={{ backgroundImage: `url(${ecommerce})` }}
              ></div>
              <h1> Full Stack To Do App</h1>
              <a
                href="https://github.com/AKHIL708/fullstack-to-do-app"
                target="_blank"
              >
                {" "}
                <button>
                  Githudb <GitHubIcon className="icon" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="get-in-touch">
          <header>
            <p>Get in Touch</p>
            <h1>Contact Me</h1>
          </header>
          <div className="card">
            <div
              className="row"
              data-aos="fade-right"
              data-aos-duration="600"
              // data-aos-delay="200"
            >
              <EmailIcon className="icon" />
              <a href="mailto:aakhiljay06@gmail.com">
                {" "}
                <p>aakhiljay06@gmail.com</p>
              </a>
            </div>
            <div className="row" data-aos="fade-left" data-aos-duration="600">
              <LinkedInIcon className="icon" />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/akhil-nayak-3913b31b6/"
              >
                <p>LinkedIn</p>
              </a>
            </div>
          </div>
        </div>
        <footer>
          <p>Copyright © 2024 Akhil Nayak. All Rights Reserved.</p>
        </footer>
      </section>
    </>
  );
}

export default Home;
