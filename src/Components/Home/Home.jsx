import React, { useState, useEffect } from "react";
import bitmojiImage from "../../Assets/images/bitmoji.png";
import personalImage from "../../Assets/images/background-removed-img.jpg";
import resume from "../../Assets/resumePdf/resume.pdf";
import ecommerce from "../../Assets/images/ecommerce.png";
import cardManagement from "../../Assets/images/cardmanagement.png";
import todo from "../../Assets/images/todo.png";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import DownloadIcon from "@mui/icons-material/Download";
import VerifiedIcon from "@mui/icons-material/Verified";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ecommercePreview from "../../Assets/videos/ecommercePreview.mp4";
import todoPreview from "../../Assets/videos/todoPreview.mp4";
import cardManagementPreview from "../../Assets/videos/cardManagement.mp4";
import CloseIcon from "@mui/icons-material/Close";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PhoneIcon from "@mui/icons-material/Phone";
import RecentActorsIcon from "@mui/icons-material/RecentActors";
import capnxtLogo from "../../Assets/images/logo.svg";
import AOS from "aos";
import "aos/dist/aos.css";
// import personalImage from "../../Assets/images/IMG-20240101-WA0001.jpg";
// import personalImage from "../../Assets/images/IMG-20240101-WA0005.jpg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Home.scss";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: window.innerWidth > 768 ? "60vw" : "80vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: "2vw",
};

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const [showVideo, setShowVideo] = useState(null);
  const [bgColour, setBgColour] = useState("black");
  const [fontColour, setFontColour] = useState("#FAFAFA");
  const [isNightMode, setIsNightMode] = useState(true);
  const [showMobileLinks, setShowMobileLinks] = useState(false);
  const [openNavLink, setOpenNavLink] = useState(true);

  const hanldeCloseModal = () => {
    setOpenModal(false);
    setShowVideo(null);
  };
  const handleOpenModal = (video) => {
    setOpenModal(true);
    setShowVideo(video);
  };

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

  const handleMobileNavLinks = (scrollToValue) => {
    window.scrollTo({
      top: scrollToValue,
      behavior: "smooth",
    });
    setOpenNavLink(true);
    setShowMobileLinks(false);
  };

  const [isMobileView, setIsMobileView] = useState(false);
  useEffect(() => {
    // console.log(window.innerWidth);
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

                    <div className="three-lines">
                      {openNavLink ? (
                        <>
                          {" "}
                          <DehazeIcon
                            className="three-line"
                            onClick={() => {
                              setOpenNavLink(false);
                              if (!showMobileLinks) {
                                setShowMobileLinks(true);
                              } else {
                                setShowMobileLinks(false);
                              }
                            }}
                          />
                        </>
                      ) : (
                        <CloseIcon
                          className="three-line"
                          onClick={() => {
                            setOpenNavLink(true);
                            if (!showMobileLinks) {
                              setShowMobileLinks(true);
                            } else {
                              setShowMobileLinks(false);
                            }
                          }}
                        />
                      )}
                    </div>

                    {showMobileLinks && (
                      <>
                        {" "}
                        <div
                          className="mobile-nav-links"
                          data-aos="fade-left"
                          data-aos-duration="2500"
                          data-aos-delay="300"
                          style={{
                            backgroundColor: bgColour,
                            color: fontColour,
                            border: `0px solid ${fontColour}`,
                            boxShadow: `10px 10px 150px -56px ${fontColour}`,
                          }}
                        >
                          <h1
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="50"
                            onClick={() => handleMobileNavLinks(600)}
                          >
                            About
                          </h1>
                          <h1
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                            onClick={() => handleMobileNavLinks(1350)}
                          >
                            Skills
                          </h1>
                          <h1
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="150"
                            onClick={() => handleMobileNavLinks(2350)}
                          >
                            Experience
                          </h1>
                          <h1
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="200"
                            onClick={() => handleMobileNavLinks(3000)}
                          >
                            Projects
                          </h1>
                          <h1
                            data-aos="fade-up"
                            data-aos-duration="1000"
                            data-aos-delay="250"
                            onClick={() => handleMobileNavLinks(4000)}
                          >
                            Contact
                          </h1>

                          <div className="row"></div>
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
              <h1>Akhil Chowhan</h1>
              <p>Full Stack Developer</p>
            </div>
            <div className="row">
              <a href={`${resume}`} target="_blank" rel="noopener noreferrer">
                <button>
                  {" "}
                  Resume
                  <DownloadIcon className="icon" />{" "}
                </button>
              </a>{" "}
              <button
                onClick={() => {
                  window.scrollTo({
                    top: 4000,
                    behavior: "smooth", // Add smooth scrolling behavior
                  });
                }}
              >
                Contact
                <RecentActorsIcon className="icon" />
              </button>
            </div>
            <div
              className="row"
              data-aos="fade-up"
              data-aos-duration="950"
              data-aos-delay="300"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/akhil-nayak-3913b31b6/"
              >
                <LinkedInIcon className="icon" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/AKHIL708"
              >
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
                  <p>1+ years FSD</p>
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
                  As a self-taught full-stack developer with over 1+ years of
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
                    <h1>React js</h1>
                    <p>Experienced</p>
                  </div>
                </div>
                <div className="row">
                  <div className="icon">
                    <VerifiedIcon />
                  </div>
                  <div className="content">
                    <h1>SCSS / SASS</h1>
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
                    <h1>React Redux</h1>
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
                    <p>Experienced</p>
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
                    <p>Intermediate</p>
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
              <div className="project-info"></div>
              <div
                className="store-img"
                style={{ backgroundImage: `url(${ecommerce})` }}
              ></div>
              <h1>E-commerce Web Application</h1>{" "}
              <div className="rows">
                <a
                  href="https://github.com/AKHIL708/eCommereApplication"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    Github <GitHubIcon className="icon" />
                  </button>
                </a>
                <button onClick={() => handleOpenModal(ecommercePreview)}>
                  Preview <OndemandVideoIcon className="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div
                className="store-img"
                style={{ backgroundImage: `url(${todo})` }}
              ></div>
              <h1> Task Management App</h1>
              <div className="rows">
                <a
                  href="https://github.com/AKHIL708/fullstack-to-do-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <button>
                    Github <GitHubIcon className="icon" />
                  </button>
                </a>
                <button onClick={() => handleOpenModal(todoPreview)}>
                  Preview <OndemandVideoIcon className="icon" />
                </button>
              </div>
            </div>
            <div className="card">
              <div
                className="store-img"
                style={{ backgroundImage: `url(${cardManagement})` }}
              ></div>
              <h1>Card Management System</h1>
              <div className="rows">
                <a
                  href="https://github.com/AKHIL708/dragDropTaskInterview"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <button>
                    Github <GitHubIcon className="icon" />
                  </button>
                </a>
                <button onClick={() => handleOpenModal(cardManagementPreview)}>
                  Preview <OndemandVideoIcon className="icon" />
                </button>
              </div>
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
              <PhoneIcon className="icon" />
              <a href="tel:9618134708">
                {" "}
                <p>9618134708</p>
              </a>
            </div>
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
                rel="noopener noreferrer"
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

      <Modal
        open={openModal}
        onClose={hanldeCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="box">
          <div className="close-icon" onClick={() => setOpenModal(false)}>
            <CloseIcon className="icon" />
          </div>
          <video
            autoPlay
            controls
            width="100%"
            height="400"
            boxShado="1px 2px solid black"
          >
            <source src={showVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Modal>
    </>
  );
}

export default Home;
