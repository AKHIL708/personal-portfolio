import { useEffect } from "react";
import Home from "./Components/Home/Home.jsx";
import topIcon from "./Assets/icons/go-to-top.svg";
import "./App.scss";

function App() {
  useEffect(() => {
    // AOS.init();
    document.addEventListener("scroll", () => {
      const scrollTopBtn = document.querySelector(".scroll-to-top");
      if (
        window.document.scrollingElement.scrollTop >
        window.document.scrollingElement.scrollHeight / 10
      ) {
        scrollTopBtn.classList.remove("hide");
      } else {
        scrollTopBtn.classList.add("hide");
      }
    });
  }, []);

  return (
    <>
      <Home />
      <div
        className="scroll-to-top hide"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        {/* <h1 style={{ fontSize: "60vw" }}>topIcon</h1> */}
        <img src={topIcon} alt="" />
      </div>
    </>
  );
}

export default App;
